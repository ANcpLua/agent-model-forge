#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

for path in \
  "$base_dir/.claude/agents/shipwright.md" \
  "$base_dir/.claude/agents/fault-auditor.md" \
  "$base_dir/.claude/agents/evidence-hunter.md"; do
  [[ -s "$path" ]] || { echo "missing agent role: $path"; exit 1; }
done

echo "claude agent roles ok"
