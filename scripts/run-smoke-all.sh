#!/usr/bin/env bash
set -euo pipefail

bash ./claude-forge/tests/skill-triggering/run-all.sh
bash ./codex-forge/tests/skill-routing/run-all.sh
bash ./unified-forge/tests/contract-smoke/run-all.sh

echo "smoke complete"
