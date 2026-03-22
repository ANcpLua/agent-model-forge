#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

[[ -s "$(dirname "$0")/request.txt" ]] || { echo "missing request fixture"; exit 1; }
[[ -s "$base_dir/skills/.curated/code-safety/SKILL.md" ]] || { echo "missing curated safety skill"; exit 1; }

echo "codex skill routing smoke ok"
