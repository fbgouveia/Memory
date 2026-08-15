#!/usr/bin/env python3
"""Coleta determinística das superfícies públicas do thefounderos.com."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import mimetypes
import re
import shutil
import urllib.error
import urllib.parse
import urllib.request
from collections import deque
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

BASE = "https://www.thefounderos.com/"
SEEDS = (BASE, urllib.parse.urljoin(BASE, "os"), urllib.parse.urljoin(BASE, "waitlist"))
USER_AGENT = "KnowledgeAbsorber/1.0 (+public research; contact: repository owner)"
MAX_ITEMS = 500
MAX_BYTES = 50 * 1024 * 1024


class SurfaceParser(HTMLParser):
    resource_attrs = {
        "a": "href",
        "audio": "src",
        "iframe": "src",
        "img": "src",
        "link": "href",
        "script": "src",
        "source": "src",
        "video": "src",
    }
    blocks = {"button", "dd", "dt", "figcaption", "h1", "h2", "h3", "h4", "h5", "h6", "label", "li", "p", "pre"}

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.resources: list[tuple[str, str, str]] = []
        self.text: list[str] = []
        self._skip = 0
        self._block_depth = 0
        self._buffer: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag in {"script", "style", "noscript"}:
            self._skip += 1
        if tag in self.blocks and not self._skip:
            self._block_depth += 1
        attr = self.resource_attrs.get(tag)
        if attr and values.get(attr):
            self.resources.append((tag, attr, values[attr] or ""))
        if values.get("srcset"):
            for candidate in (values["srcset"] or "").split(","):
                url = candidate.strip().split(" ", 1)[0]
                if url:
                    self.resources.append((tag, "srcset", url))

    def handle_endtag(self, tag: str) -> None:
        if tag in self.blocks and self._block_depth:
            self._block_depth -= 1
            if self._block_depth == 0:
                value = re.sub(r"\s+", " ", " ".join(self._buffer)).strip()
                if value and (not self.text or self.text[-1] != value):
                    self.text.append(value)
                self._buffer.clear()
        if tag in {"script", "style", "noscript"} and self._skip:
            self._skip -= 1

    def handle_data(self, data: str) -> None:
        if not self._skip and self._block_depth:
            value = data.strip()
            if value:
                self._buffer.append(value)


def canonical(url: str, *, page: bool = False) -> str:
    parts = urllib.parse.urlsplit(url)
    path = re.sub(r"/{2,}", "/", parts.path or "/")
    query = "" if page else parts.query
    return urllib.parse.urlunsplit((parts.scheme.lower(), parts.netloc.lower(), path, query, ""))


def same_origin(url: str) -> bool:
    return urllib.parse.urlsplit(url).netloc.lower() == "www.thefounderos.com"


def local_path(root: Path, url: str, media_type: str, category: str) -> Path:
    parts = urllib.parse.urlsplit(url)
    path = urllib.parse.unquote(parts.path).strip("/") or "home"
    safe = "/".join(re.sub(r"[^A-Za-z0-9._-]+", "_", p) for p in path.split("/"))
    target = root / "raw" / "site" / ("pages" if category == "page" else "assets") / safe
    if category == "page" and not target.suffix:
        target = target.with_suffix(".html")
    elif category != "page" and not target.suffix:
        target = target.with_suffix(mimetypes.guess_extension(media_type.split(";", 1)[0]) or ".bin")
    if parts.query:
        target = target.with_name(f"{target.stem}__q_{hashlib.sha256(parts.query.encode()).hexdigest()[:10]}{target.suffix}")
    return target


def fetch(url: str) -> tuple[bytes, str, str, int]:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "*/*"})
    with urllib.request.urlopen(request, timeout=30) as response:
        length = response.headers.get("Content-Length")
        if length and int(length) > MAX_BYTES:
            raise ValueError(f"artifact exceeds {MAX_BYTES} bytes")
        body = response.read(MAX_BYTES + 1)
        if len(body) > MAX_BYTES:
            raise ValueError(f"artifact exceeds {MAX_BYTES} bytes")
        return body, response.headers.get_content_type(), response.geturl(), response.status


def write_text(root: Path, page_url: str, raw_path: Path, parser: SurfaceParser, digest: str) -> None:
    pages = root / "raw" / "site" / "pages"
    assets = root / "raw" / "site" / "assets"
    try:
        slug = raw_path.relative_to(pages).with_suffix(".md")
    except ValueError:
        slug = Path("embedded") / raw_path.relative_to(assets).with_suffix(".md")
    target = root / "knowledge" / "site" / slug
    target.parent.mkdir(parents=True, exist_ok=True)
    title = parser.text[0] if parser.text else urllib.parse.urlsplit(page_url).path or "Home"
    lines = [
        f"# {title}",
        "",
        f"- Source: {page_url}",
        f"- Raw SHA-256: `{digest}`",
        "",
        "## Visible text",
        "",
        *(html.unescape(line) for line in parser.text),
        "",
    ]
    target.write_text("\n".join(lines), encoding="utf-8")


def collect(root: Path) -> int:
    if root.name != "thefounderos" or not (root / "CONTRACT.md").is_file():
        raise ValueError(f"refusing to refresh unexpected output root: {root}")
    for generated in (root / "raw" / "site", root / "knowledge" / "site"):
        if generated.is_dir():
            shutil.rmtree(generated)
    captured_at = datetime.now(timezone.utc).isoformat()
    page_queue = deque((canonical(url, page=True), "seed") for url in SEEDS)
    asset_queue: deque[tuple[str, str]] = deque()
    seen: set[str] = set()
    records: dict[str, dict[str, object]] = {}

    def record(url: str, category: str, discovered_from: str, status: str, **extra: object) -> None:
        existing = records.get(url)
        if existing:
            sources = existing["discovered_from"]
            if isinstance(sources, list) and discovered_from not in sources:
                sources.append(discovered_from)
            if status == "error":
                existing["status"] = "error"
                existing.update(extra)
            return
        records[url] = {
            "source_url": url,
            "category": category,
            "discovered_from": [discovered_from],
            "status": status,
            **extra,
        }

    while (page_queue or asset_queue) and len(seen) < MAX_ITEMS:
        if page_queue:
            (url, discovered_from), category = page_queue.popleft(), "page"
        else:
            url, discovered_from = asset_queue.popleft()
            category = "asset"
        url = canonical(url, page=category == "page")
        if url in seen:
            continue
        seen.add(url)
        try:
            body, media_type, final_url, status_code = fetch(url)
            digest = hashlib.sha256(body).hexdigest()
            path = local_path(root, url, media_type, category)
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(body)
            record(
                url,
                category,
                discovered_from,
                "captured",
                final_url=final_url,
                http_status=status_code,
                media_type=media_type,
                bytes=len(body),
                sha256=digest,
                local_path=str(path.relative_to(root)),
            )
            if media_type == "text/html":
                parser = SurfaceParser()
                parser.feed(body.decode("utf-8", errors="replace"))
                write_text(root, url, path, parser, digest)
                for tag, attr, raw in parser.resources:
                    absolute = urllib.parse.urljoin(final_url, raw)
                    if not absolute.startswith(("http://", "https://")):
                        continue
                    if not same_origin(absolute):
                        record(absolute, "external_reference", url, "external_reference", html_tag=tag, html_attr=attr)
                        continue
                    parts = urllib.parse.urlsplit(absolute)
                    is_page = tag == "iframe" or (
                        tag == "a" and not Path(parts.path).suffix and not parts.path.startswith("/_next/")
                    )
                    if is_page:
                        page_queue.append((canonical(absolute, page=True), url))
                    else:
                        asset_queue.append((absolute, url))
        except (OSError, ValueError, urllib.error.URLError) as exc:
            record(url, category, discovered_from, "error", error=str(exc))

    manifest = {
        "schema_version": 1,
        "captured_at": captured_at,
        "base_url": BASE,
        "max_items": MAX_ITEMS,
        "max_bytes_per_item": MAX_BYTES,
        "records": list(records.values()),
    }
    inventory = root / "inventory" / "site_manifest.json"
    inventory.parent.mkdir(parents=True, exist_ok=True)
    inventory.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    captured = sum(item["status"] == "captured" for item in records.values())
    errors = sum(item["status"] == "error" for item in records.values())
    print(f"captured={captured} errors={errors} records={len(records)} manifest={inventory}")
    return 1 if errors else 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    return collect(args.output.resolve())


if __name__ == "__main__":
    raise SystemExit(main())
