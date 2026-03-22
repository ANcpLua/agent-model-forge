#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

[[ -s "$base_dir/core/catalog/index.yaml" ]] || { echo "missing catalog index"; exit 1; }
echo "unified manifest ok"
