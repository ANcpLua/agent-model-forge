#!/usr/bin/env bash
set -euo pipefail

bash ./unified-forge/adapters/emit-claude.sh
bash ./unified-forge/adapters/emit-codex.sh
bash ./unified-forge/adapters/reconcile-parity.sh

echo "sync complete"
