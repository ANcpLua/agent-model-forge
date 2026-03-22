#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

for path in \
  "$base_dir/.claude/skills/incident-response/SKILL.md" \
  "$base_dir/.claude/skills/skill-spec-builder/SKILL.md"; do
  [[ -s "$path" ]] || { echo "missing skill contract: $path"; exit 1; }
done

echo "claude skill contracts ok"
