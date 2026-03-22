#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

echo "Install Codex-local assets from $base_dir by linking .codex and selected skill tiers into a target workspace."
