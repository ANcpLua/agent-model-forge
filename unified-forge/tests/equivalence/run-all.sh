#!/usr/bin/env bash
set -euo pipefail

base_dir="$(cd "$(dirname "$0")/../.." && pwd)"

for path in \
  "$base_dir/core/catalog/index.yaml" \
  "$base_dir/core/registry/asset-map.md" \
  "$base_dir/../reference-matrix/feature-parity.md"; do
  [[ -s "$path" ]] || { echo "missing equivalence file: $path"; exit 1; }
done

echo "unified equivalence ok"
