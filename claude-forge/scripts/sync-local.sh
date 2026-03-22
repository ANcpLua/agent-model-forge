#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

echo "Claude-local sync is source-controlled in $base_dir; no external mutation is performed by default."
