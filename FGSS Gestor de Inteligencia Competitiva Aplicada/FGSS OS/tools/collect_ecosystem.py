#!/usr/bin/env python3
"""Congela fontes públicas externas do ecossistema TheFounderOS.

Não envia formulários, não usa cookies e não atravessa links fora da allowlist.
Instagram e Typeform são reduzidos a metadados/schema em vez de arquivados.
"""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
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
    ("agency_home", "https://www.agencyaccelerant.ai/", "capture", "page"),
    ("agency_app", "https://www.agencyaccelerant.ai/assets/index-DZr35kRb.js", "capture", "javascript"),
    ("agency_css", "https://www.agencyaccelerant.ai/assets/index-amJLmMFS.css", "capture", "stylesheet"),
    ("agency_robots", "https://www.agencyaccelerant.ai/robots.txt", "capture", "policy"),
    ("agency_class", "https://www.agencyaccelerant.ai/class", "capture", "spa_route"),
    ("agency_registered", "https://www.agencyaccelerant.ai/registered", "capture", "spa_route"),
    ("agency_free_training", "https://www.agencyaccelerant.ai/free-training", "capture", "spa_route"),
    ("agency_booking", "https://www.agencyaccelerant.ai/booking", "capture", "spa_route"),
    ("agency_confirmation", "https://www.agencyaccelerant.ai/confirmation", "capture", "spa_route"),
    ("agency_privacy", "https://www.agencyaccelerant.ai/privacy-policy", "capture", "legal_route"),
    ("agency_terms", "https://www.agencyaccelerant.ai/terms-conditions", "capture", "legal_route"),
    ("agency_bennett_image", "https://www.agencyaccelerant.ai/assets/bennett-CSWmKRpG.jpg", "capture", "image"),
    ("agency_logo", "https://www.agencyaccelerant.ai/assets/logo-CrMnZ5a5.jpg", "capture", "image"),
    ("agency_gcal_preview", "https://www.agencyaccelerant.ai/assets/gcal-preview-UdRQwCsv.png", "capture", "image"),
    ("agency_telegram_preview", "https://www.agencyaccelerant.ai/assets/telegram-preview-CyrrpwZx.png", "capture", "image"),
    ("trakyo_script", "https://go.agencyaccelerant.ai/api/js/latest.js", "tracking_script", "tracking_script"),
    ("typeform_waitlist", "https://form.typeform.com/to/VsRNRmhk", "typeform", "lead_form"),
    ("typeform_application", "https://form.typeform.com/to/UCLDIMAp", "typeform", "sales_form"),
    ("instagram_profile", "https://www.instagram.com/bennettx.ai/", "instagram", "social_profile"),
    # Plataformas de terceiros ficam apenas como metadados públicos. Não
    # arquivamos páginas completas, avatares, comentários ou dados de membros.
    ("whop_agency_accelerants", "https://whop.com/agency-accelerants/", "metadata", "commerce_profile"),
    ("whop_agent_accelerator", "https://whop.com/discover/agency-accelerants/agent-accelerator-a9/", "metadata", "commerce_offer"),
    ("skool_bennett", "https://www.skool.com/%4033307348", "metadata", "community_profile"),
    # LinkedIn retorna 999 a coletores automatizados; a análise registra apenas
    # evidência observada via index público, sem tentar contornar o bloqueio.
    ("merydian_home", "https://merydian.ai/", "metadata", "company_profile"),
    ("operatoros_home", "https://operatoros.ai/", "metadata", "ecosystem_reference"),
    ("github_user", "https://api.github.com/users/Bennettxai", "capture", "github_api"),
    ("github_repositories", "https://api.github.com/users/Bennettxai/repos?per_page=100&sort=updated", "capture", "github_api"),
    ("github_founderos", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO", "capture", "github_api"),
    ("github_commits", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO/commits?per_page=100", "capture", "github_api"),
    ("github_issues", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO/issues?state=all&per_page=100", "capture", "github_api"),
    ("github_contributors", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO/contributors?per_page=100&anon=true", "capture", "github_api"),
    ("github_releases", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO/releases?per_page=100", "capture", "github_api"),
    ("github_tags", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO/tags?per_page=100", "capture", "github_api"),
    ("github_forks", "https://api.github.com/repos/Bennettxai/FounderOS-DEMO/forks?sort=stargazers&per_page=100", "capture", "github_api"),
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
        headers={"User-Agent": USER_AGENT, "Accept": "*/*"},
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        length = response.headers.get("Content-Length")
        if length and int(length) > MAX_BYTES:
            raise ValueError(f"artifact exceeds {MAX_BYTES} bytes")
        body = response.read(MAX_BYTES + 1)
        if len(body) > MAX_BYTES:
            raise ValueError(f"artifact exceeds {MAX_BYTES} bytes")
        return body, response.headers.get_content_type(), response.geturl(), response.status


def extract_form(body: bytes) -> dict[str, Any]:
    text = body.decode("utf-8", errors="replace")
    marker = "form: {"
    position = text.find(marker)
    if position < 0:
        raise ValueError("public Typeform schema not found")
    start = text.find("{", position)
    form, _ = json.JSONDecoder().raw_decode(text[start:])

    def clean_field(field: dict[str, Any]) -> dict[str, Any]:
        properties = field.get("properties") or {}
        result: dict[str, Any] = {
            "id": field.get("id"),
            "ref": field.get("ref"),
            "title": field.get("title"),
            "type": field.get("type"),
            "required": (field.get("validations") or {}).get("required"),
        }
        if properties.get("description"):
            result["description"] = properties["description"]
        if properties.get("choices"):
            result["choices"] = [
                {"id": choice.get("id"), "ref": choice.get("ref"), "label": choice.get("label")}
                for choice in properties["choices"]
            ]
        if properties.get("fields"):
            result["fields"] = [clean_field(child) for child in properties["fields"]]
        return result

    settings = form.get("settings") or {}
    return {
        "source_form_id": form.get("id"),
        "title": form.get("title"),
        "type": form.get("type"),
        "public": settings.get("is_public"),
        "allow_indexing": (settings.get("meta") or {}).get("allow_indexing"),
        "partial_responses_to_all_integrations": settings.get("partial_responses_to_all_integrations"),
        "fields": [clean_field(field) for field in form.get("fields") or []],
        "logic": form.get("logic") or [],
        "welcome_screens": form.get("welcome_screens") or [],
        "thankyou_screens": form.get("thankyou_screens") or [],
    }


def extract_instagram(body: bytes) -> dict[str, Any]:
    parser = MetaParser()
    parser.feed(body.decode("utf-8", errors="replace"))
    allowed = {
        key: html.unescape(value)
        for key, value in parser.meta.items()
        if key in {"description", "og:title", "og:description", "og:url", "robots", "bingbot"}
    }


def extract_public_metadata(body: bytes) -> dict[str, Any]:
    """Retém somente metadados editoriais, sem HTML, mídia ou dados pessoais."""
    parser = MetaParser()
    parser.feed(body.decode("utf-8", errors="replace"))
    allowed_keys = {
        "description",
        "og:description",
        "og:site_name",
        "og:title",
        "og:type",
        "og:url",
        "robots",
        "twitter:description",
        "twitter:title",
    }


def sanitize_tracking_script(body: bytes) -> bytes:
    """Remove client-side key material while preserving auditable behavior."""
    return re.sub(
        rb'(?<=let r=")[0-9a-fA-F]{32}(?=")',
        b"REDACTED_PUBLIC_CLIENT_KEY",
        body,
    )
    return {
        "canonical": parser.canonical,
        "public_metadata": {
            key: html.unescape(value)
            for key, value in parser.meta.items()
            if key in allowed_keys
        },
        "archive_policy": "metadata only; raw HTML and media discarded",
    }
    return {
        "canonical": parser.canonical,
        "public_metadata": allowed,
        "archive_policy": "summary only; source declares noarchive/noimageindex",
    }


def find_external_references(agency_js: bytes) -> list[dict[str, str]]:
    text = agency_js.decode("utf-8", errors="replace")
    urls = set(re.findall(r"https?://[^\"'` )]+", text))
    allowed_hosts = {
        "calendly.com",
        "connect.facebook.net",
        "event.webinarjam.com",
        "fast.vidalytics.com",
        "form.typeform.com",
        "t.me",
        "www.facebook.com",
        "www.youtube.com",
    }
    results = []
    for url in sorted(urls):
        host = urllib.parse.urlsplit(url).netloc.lower()
        if host in allowed_hosts:
            results.append({"source_url": url, "host": host, "status": "external_reference"})
    return results


def write_json(path: Path, value: object) -> tuple[int, str]:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    path.write_bytes(payload)
    return len(payload), sha256_bytes(payload)


def collect(root: Path) -> int:
    if root.name != "thefounderos" or not (root / "ECOSYSTEM_CONTRACT.md").is_file():
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
    agency_js: bytes | None = None

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
                if key == "agency_app":
                    agency_js = body
            elif policy == "tracking_script":
                artifact = sanitize_tracking_script(body)
                if artifact == body:
                    raise ValueError("expected public client key pattern was not found for redaction")
                path = raw_root / safe_name(key, final_url, media_type)
                path.write_bytes(artifact)
                base.update({
                    "status": "captured_redacted",
                    "local_path": str(path.relative_to(root)),
                    "artifact_bytes": len(artifact),
                    "artifact_sha256": sha256_bytes(artifact),
                    "note": "public client-side key redacted; response hash retained for provenance",
                })
            elif policy == "typeform":
                artifact = extract_form(body)
                path = extracted_root / f"{key}.json"
                size, artifact_hash = write_json(path, artifact)
                base.update({
                    "status": "extracted",
                    "local_path": str(path.relative_to(root)),
                    "artifact_bytes": size,
                    "artifact_sha256": artifact_hash,
                    "note": "public schema only; no response submitted or stored",
                })
            elif policy == "instagram":
                artifact = extract_instagram(body)
                path = extracted_root / f"{key}.json"
                size, artifact_hash = write_json(path, artifact)
                base.update({
                    "status": "summarized_not_archived",
                    "local_path": str(path.relative_to(root)),
                    "artifact_bytes": size,
                    "artifact_sha256": artifact_hash,
                    "note": "raw HTML and profile image discarded because source declares noarchive/noimageindex",
                })
            elif policy == "metadata":
                artifact = extract_public_metadata(body)
                path = extracted_root / f"{key}.json"
                size, artifact_hash = write_json(path, artifact)
                base.update({
                    "status": "summarized_not_archived",
                    "local_path": str(path.relative_to(root)),
                    "artifact_bytes": size,
                    "artifact_sha256": artifact_hash,
                    "note": "selected public metadata only; no profiles, comments, members, images or raw HTML archived",
                })
            records.append(base)
        except (OSError, ValueError, json.JSONDecodeError, urllib.error.URLError) as exc:
            base.update({"status": "error", "error": str(exc)})
            records.append(base)

    if agency_js is not None:
        references = find_external_references(agency_js)
        reference_path = extracted_root / "agency_external_references.json"
        size, artifact_hash = write_json(reference_path, references)
        records.append({
            "key": "agency_external_references",
            "source_url": "derived:agency_app",
            "category": "reference_inventory",
            "policy": "extract",
            "status": "extracted",
            "local_path": str(reference_path.relative_to(root)),
            "artifact_bytes": size,
            "artifact_sha256": artifact_hash,
            "references": len(references),
        })

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
