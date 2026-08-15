#!/usr/bin/env python3
"""Gera o manifesto Git e reconcilia todos os artefatos do subprojeto."""

from __future__ import annotations

import hashlib
import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path


def digest(path: Path) -> str:
    value = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            value.update(chunk)
    return value.hexdigest()


def build_repository_manifest(root: Path) -> dict[str, object]:
    source_path = root / "inventory" / "repository_source.json"
    source = json.loads(source_path.read_text(encoding="utf-8"))
    snapshot = root / str(source["snapshot_path"])
    files = []
    for path in sorted(item for item in snapshot.rglob("*") if item.is_file()):
        files.append({
            "path": str(path.relative_to(snapshot)),
            "bytes": path.stat().st_size,
            "sha256": digest(path),
        })
    manifest = {
        "schema_version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": source,
        "files": files,
    }
    target = root / "inventory" / "repository_manifest.json"
    target.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return manifest


def audit(root: Path) -> int:
    errors: list[str] = []
    site_path = root / "inventory" / "site_manifest.json"
    site = json.loads(site_path.read_text(encoding="utf-8"))
    repo = build_repository_manifest(root)

    ecosystem_path = root / "inventory" / "ecosystem_manifest.json"
    ecosystem = (
        json.loads(ecosystem_path.read_text(encoding="utf-8"))
        if ecosystem_path.is_file()
        else {"records": []}
    )

    site_status = Counter()
    site_media = Counter()
    for item in site["records"]:
        site_status[item["status"]] += 1
        site_media[str(item.get("media_type", "external/unknown"))] += 1
        if item["status"] != "captured":
            continue
        path = root / item["local_path"]
        if not path.is_file():
            errors.append(f"site missing: {item['local_path']}")
            continue
        if path.stat().st_size != item["bytes"]:
            errors.append(f"site size mismatch: {item['local_path']}")
        if digest(path) != item["sha256"]:
            errors.append(f"site hash mismatch: {item['local_path']}")

    manifested_site_paths = {
        str(item["local_path"])
        for item in site["records"]
        if item["status"] == "captured"
    }
    disk_site_paths = {
        str(path.relative_to(root))
        for path in (root / "raw" / "site").rglob("*")
        if path.is_file()
    }
    for orphan in sorted(disk_site_paths - manifested_site_paths):
        errors.append(f"site orphan not in manifest: {orphan}")

    ecosystem_status = Counter()
    ecosystem_categories = Counter()
    manifested_ecosystem_paths: set[str] = set()
    for item in ecosystem["records"]:
        ecosystem_status[item["status"]] += 1
        ecosystem_categories[item["category"]] += 1
        local_path = item.get("local_path")
        if not local_path:
            continue
        manifested_ecosystem_paths.add(str(local_path))
        path = root / str(local_path)
        if not path.is_file():
            errors.append(f"ecosystem missing: {local_path}")
            continue
        if path.stat().st_size != item["artifact_bytes"]:
            errors.append(f"ecosystem size mismatch: {local_path}")
        if digest(path) != item["artifact_sha256"]:
            errors.append(f"ecosystem hash mismatch: {local_path}")

    disk_ecosystem_paths = {
        str(path.relative_to(root))
        for base in (root / "raw" / "ecosystem", root / "knowledge" / "ecosystem" / "extracted")
        if base.is_dir()
        for path in base.rglob("*")
        if path.is_file()
    }
    for orphan in sorted(disk_ecosystem_paths - manifested_ecosystem_paths):
        errors.append(f"ecosystem orphan not in manifest: {orphan}")

    repo_extensions = Counter()
    snapshot = root / str(repo["source"]["snapshot_path"])
    for item in repo["files"]:
        path = snapshot / item["path"]
        repo_extensions[path.suffix.lower() or "[no extension]"] += 1
        if not path.is_file():
            errors.append(f"repository missing: {item['path']}")
            continue
        if path.stat().st_size != item["bytes"]:
            errors.append(f"repository size mismatch: {item['path']}")
        if digest(path) != item["sha256"]:
            errors.append(f"repository hash mismatch: {item['path']}")

    license_path = snapshot / "LICENSE"
    if not license_path.is_file() or "MIT License" not in license_path.read_text(encoding="utf-8"):
        errors.append("MIT LICENSE missing or invalid")

    audio_suffixes = {".aac", ".flac", ".m4a", ".mp3", ".ogg", ".wav"}
    video_suffixes = {".avi", ".m4v", ".mkv", ".mov", ".mp4", ".webm"}
    image_suffixes = {".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}
    all_local = [root / item["local_path"] for item in site["records"] if item["status"] == "captured"]
    media_counts = {
        "audio": sum(path.suffix.lower() in audio_suffixes for path in all_local),
        "video": sum(path.suffix.lower() in video_suffixes for path in all_local),
        "images": sum(path.suffix.lower() in image_suffixes for path in all_local),
    }

    report = {
        "audited_at": datetime.now(timezone.utc).isoformat(),
        "status": "pass" if not errors else "fail",
        "site": {
            "records": len(site["records"]),
            "status_counts": dict(sorted(site_status.items())),
            "media_type_counts": dict(sorted(site_media.items())),
            "local_media_counts": media_counts,
        },
        "repository": {
            "files": len(repo["files"]),
            "bytes": sum(item["bytes"] for item in repo["files"]),
            "extension_counts": dict(sorted(repo_extensions.items())),
            "commit": repo["source"]["commit"],
            "license": repo["source"]["license"],
        },
        "ecosystem": {
            "records": len(ecosystem["records"]),
            "status_counts": dict(sorted(ecosystem_status.items())),
            "category_counts": dict(sorted(ecosystem_categories.items())),
        },
        "errors": errors,
    }
    target = root / "inventory" / "audit_report.json"
    target.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(audit(Path(__file__).resolve().parents[1]))
