#!/usr/bin/env bash
set -euo pipefail

printf "==> checking required top-level docs\n"
for path in README.md AGENTS.md LICENSE Makefile; do
  [[ -s "$path" ]] || { echo "missing or empty: $path"; exit 1; }
  echo "ok $path"
done

printf "==> checking structure markers\n"
for path in \
  claude-forge/README.md \
  codex-forge/README.md \
  unified-forge/README.md \
  reference-matrix/repo-equivalents.md \
  reference-matrix/feature-parity.md; do
  [[ -s "$path" ]] || { echo "missing or empty: $path"; exit 1; }
  echo "ok $path"
done
