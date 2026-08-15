#!/usr/bin/env python3
"""Congela fontes públicas externas do ecossistema CrewAI.

Não envia formulários, não usa cookies e não atravessa links fora da allowlist.
GitHub API e PyPI são capturados como JSON. LinkedIn é apenas metadado.
"""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import shutil
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Any

USER_AGENT = "KnowledgeAbsorber/1.0 (+public competitive research)"
MAX_BYTES = 8 * 1024 * 1024

SOURCES = (
    ("github_user", "https://api.github.com/users/crewAIInc", "capture", "github_api"),
    ("github_repositories", "https://api.github.com/users/crewAIInc/repos?per_page=100&sort=updated", "capture", "github_api"),
    ("github_crewai", "https://api.github.com/repos/crewAIInc/crewAI", "capture", "github_api"),
    ("github_commits", "https://api.github.com/repos/crewAIInc/crewAI/commits?per_page=100", "capture", "github_api"),
    ("github_issues", "https://api.github.com/repos/crewAIInc/crewAI/issues?state=all&per_page=100", "capture", "github_api"),
    ("github_contributors", "https://api.github.com/repos/crewAIInc/crewAI/contributors?per_page=100&anon=true", "capture", "github_api"),
    ("github_releases", "https://api.github.com/repos/crewAIInc/crewAI/releases?per_page=100", "capture", "github_api"),
    ("github_tags", "https://api.github.com/repos/crewAIInc/crewAI/tags?per_page=100", "capture", "github_api"),
    ("github_forks", "https://api.github.com/repos/crewAIInc/crewAI/forks?sort=stargazers&per_page=100", "capture", "github_api"),
    ("pypi_package", "https://pypi.org/pypi/crewai/json", "capture", "package_registry"),
)


class MetaParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.meta: dict[str, str] = {}
        self.canonical: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "meta":
            key = values.get("property") or values.get("name")
            value = values.get("content")
            if key and value and key not in self.meta:
                self.meta[key] = value
        elif tag == "link" and values.get("rel") == "canonical":
            self.canonical = values.get("href")


def sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def safe_name(key: str, url: str, media_type: str) -> str:
    extension = Path(urllib.parse.urlsplit(url).path).suffix
    if not extension:
        extension = {
            "application/json": ".json",
            "application/javascript": ".js",
            "text/css": ".css",
            "text/html": ".html",
            "text/plain": ".txt",
        }.get(media_type, ".bin")
    return f"{key}{extension}"


def fetch(url: str) -> tuple[bytes, str, str, int]:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Accept": "application/json, */*"},
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        length = response.headers.get("Content-Length")
        if length and int(length) > MAX_BYTES:
            raise ValueError(f"artifact exceeds {MAX_BYTES} bytes")
        body = response.read(MAX_BYTES + 1)
        if len(body) > MAX_BYTES:
            raise ValueError(f"artifact exceeds {MAX_BYTES} bytes")
        return body, response.headers.get_content_type(), response.geturl(), response.status


def write_json(path: Path, value: object) -> tuple[int, str]:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    path.write_bytes(payload)
    return len(payload), sha256_bytes(payload)


def collect(root: Path) -> int:
    if root.name != "crewai" or not (root / "ECOSYSTEM_CONTRACT.md").is_file():
        raise ValueError(f"refusing unexpected output root: {root}")
    raw_root = root / "raw" / "ecosystem"
    extracted_root = root / "knowledge" / "ecosystem" / "extracted"
    for generated in (raw_root, extracted_root):
        if generated.is_dir():
            shutil.rmtree(generated)
    raw_root.mkdir(parents=True, exist_ok=True)
    extracted_root.mkdir(parents=True, exist_ok=True)

    captured_at = datetime.now(timezone.utc).isoformat()
    records: list[dict[str, Any]] = []

    for key, url, policy, category in SOURCES:
        base: dict[str, Any] = {
            "key": key,
            "source_url": url,
            "category": category,
            "policy": policy,
        }
        try:
            body, media_type, final_url, status = fetch(url)
            response_hash = sha256_bytes(body)
            base.update({
                "final_url": final_url,
                "http_status": status,
                "media_type": media_type,
                "response_bytes": len(body),
                "response_sha256": response_hash,
            })
            if policy == "capture":
                path = raw_root / safe_name(key, final_url, media_type)
                path.write_bytes(body)
                base.update({
                    "status": "captured",
                    "local_path": str(path.relative_to(root)),
                    "artifact_bytes": len(body),
                    "artifact_sha256": response_hash,
                })
            records.append(base)
        except (OSError, ValueError, json.JSONDecodeError, urllib.error.URLError) as exc:
            base.update({"status": "error", "error": str(exc)})
            records.append(base)

    manifest = {
        "schema_version": 1,
        "captured_at": captured_at,
        "max_bytes_per_item": MAX_BYTES,
        "records": records,
    }
    target = root / "inventory" / "ecosystem_manifest.json"
    write_json(target, manifest)
    errors = sum(record["status"] == "error" for record in records)
    print(f"records={len(records)} errors={errors} manifest={target}")
    return 1 if errors else 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    return collect(args.output.resolve())


if __name__ == "__main__":
    raise SystemExit(main())
