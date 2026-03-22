#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

echo "Codex-local sync is driven from unified-forge adapters; this script is a stable entry point for $base_dir."
