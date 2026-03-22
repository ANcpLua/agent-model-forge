#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

bash "$base_dir/adapters/emit-claude.sh"
bash "$base_dir/adapters/emit-codex.sh"
bash "$base_dir/adapters/reconcile-parity.sh"
