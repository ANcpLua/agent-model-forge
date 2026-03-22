#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

for path in \
  "$base_dir/.codex/config.toml" \
  "$base_dir/.codex/rules/runtime.rules" \
  "$base_dir/skills/.system/delivery-flow/SKILL.md" \
  "$base_dir/skills/.curated/code-safety/SKILL.md" \
  "$base_dir/skills/.experimental/ops-intel/SKILL.md"; do
  [[ -s "$path" ]] || { echo "missing contract file: $path"; exit 1; }
done

echo "codex contracts ok"
