#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

for path in \
  "$base_dir/.codex/agents/forge-builder.toml" \
  "$base_dir/.codex/agents/skeptic.toml" \
  "$base_dir/.codex/agents/pathfinder.toml"; do
  [[ -s "$path" ]] || { echo "missing routing agent: $path"; exit 1; }
done

echo "codex agent routing ok"
