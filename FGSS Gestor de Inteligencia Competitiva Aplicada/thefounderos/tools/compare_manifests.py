#!/usr/bin/env python3
"""Compara duas capturas sem tocar nas fontes ou no baseline."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


def load(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def index(manifest: dict[str, Any]) -> dict[str, dict[str, Any]]:
    records = manifest.get("records") or []
    return {str(item.get("key") or item.get("url") or item.get("source_url")): item for item in records}


def fingerprint(item: dict[str, Any]) -> dict[str, Any]:
    keys = (
        "status", "source_url", "final_url", "http_status", "media_type",
        "response_bytes", "response_sha256", "artifact_bytes", "artifact_sha256",
        "bytes", "sha256",
    )
    return {key: item.get(key) for key in keys if key in item}


def compare(before: dict[str, Any], after: dict[str, Any]) -> dict[str, Any]:
    old, new = index(before), index(after)
    added = sorted(new.keys() - old.keys())
    removed = sorted(old.keys() - new.keys())
    changed = []
    for key in sorted(old.keys() & new.keys()):
        if fingerprint(old[key]) != fingerprint(new[key]):
            changed.append({"key": key, "before": fingerprint(old[key]), "after": fingerprint(new[key])})
    return {
        "schema_version": 1,
        "summary": {"added": len(added), "removed": len(removed), "changed": len(changed)},
        "added": added,
        "removed": removed,
        "changed": changed,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("before", type=Path)
    parser.add_argument("after", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    report = compare(load(args.before), load(args.after))
    payload = json.dumps(report, ensure_ascii=False, indent=2) + "\n"
    if args.output:
        args.output.write_text(payload, encoding="utf-8")
    else:
        print(payload, end="")
    return 1 if any(report["summary"].values()) else 0


if __name__ == "__main__":
    raise SystemExit(main())
