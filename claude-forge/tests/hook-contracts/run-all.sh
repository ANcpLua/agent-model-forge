#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

for path in "$base_dir/.claude/hooks/session-start.json" "$base_dir/.claude/hooks/release-guard.json"; do
  [[ -s "$path" ]] || { echo "missing hook: $path"; exit 1; }
done

echo "claude hook contracts ok"
