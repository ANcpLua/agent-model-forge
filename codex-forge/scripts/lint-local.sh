#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

for path in \
  "$base_dir/.codex/config.toml" \
  "$base_dir/.codex/agents/forge-builder.toml" \
  "$base_dir/skills/.system/README.md"; do
  [[ -s "$path" ]] || { echo "missing $path"; exit 1; }
done

echo "codex-forge lint ok"
