#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

[[ -s "$(dirname "$0")/example-request.txt" ]] || { echo "missing test prompt"; exit 1; }
[[ -s "$base_dir/.claude/skills/skill-spec-builder/SKILL.md" ]] || { echo "missing expected skill"; exit 1; }

echo "claude skill triggering smoke ok"
