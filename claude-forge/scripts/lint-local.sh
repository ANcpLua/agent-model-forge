#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

for path in \
  "$base_dir/.claude/CLAUDE.md" \
  "$base_dir/.claude/rules/execution-discipline.md" \
  "$base_dir/.claude/skills/incident-response/SKILL.md"; do
  [[ -s "$path" ]] || { echo "missing $path"; exit 1; }
done

echo "claude-forge lint ok"
