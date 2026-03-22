#!/usr/bin/env bash
set -euo pipefail

printf "==> validating local subtrees\n"
bash ./claude-forge/tests/agent-roles/run-all.sh
bash ./codex-forge/tests/agent-routing/run-all.sh
bash ./unified-forge/tests/equivalence/run-all.sh

printf "==> validating parity docs\n"
for path in \
  reference-matrix/repo-equivalents.md \
  reference-matrix/feature-parity.md; do
  [[ -s "$path" ]] || { echo "missing parity doc: $path"; exit 1; }
done

echo "validation complete"
