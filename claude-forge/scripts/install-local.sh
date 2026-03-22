#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

echo "Install Claude-local assets from $base_dir by linking or copying .claude into a target workspace."
