#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/.." && pwd)"

for path in \
  "$base_dir/core/catalog/index.yaml" \
  "$base_dir/core/contracts/asset-contract.yaml" \
  "$base_dir/core/contracts/skill-contract.yaml" \
  "$base_dir/core/contracts/agent-contract.yaml" \
  "$base_dir/core/contracts/hook-contract.yaml"; do
  [[ -s "$path" ]] || { echo "missing $path"; exit 1; }
done

echo "unified-forge lint ok"
