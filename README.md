# Agent Model Forge

`agent-model-forge` is a local comparison and design repo with three full structures:

- `claude-forge/` for a Claude-native operating model
- `codex-forge/` for a Codex-native operating model
- `unified-forge/` for a model-agnostic source layer that can emit both

This repository is not a fork of any source project. It is an original implementation that folds useful ideas from public ecosystems into a single, opinionated layout.

## Why This Exists

Most agent repositories pick one ecosystem and either ignore the others or bolt on weak compatibility layers later. This project takes the opposite approach:

- one Claude-first tree
- one Codex-first tree
- one canonical source layer that can project into both

The goal is not to pretend all runtimes are the same. The goal is to preserve equivalence where it is real and name exclusions where it is not.

## Design goals

- Keep Claude and Codex first-class instead of treating one as a compatibility layer.
- Preserve equivalent capabilities where comparison is meaningful.
- Mark non-comparable features explicitly instead of forcing bad abstractions.
- Separate canonical asset definitions from runtime-specific render targets.

## What is included

- local agent roles
- local skill packages
- local rules and prompts
- hook and policy examples
- cost and usage observability notes
- parity mapping for comparable and non-comparable features
- a manifest-driven generator for Claude and Codex runtime projections

## Originality

- local names and local contracts
- no copied upstream code snippets
- no mirrored upstream directory trees presented as original design
- explicit source-pressure mapping in the reference matrix

## Quick start

```bash
git clone https://github.com/ANcpLua/agent-model-forge.git
cd agent-model-forge
./scripts/lint-all.sh
./scripts/validate-all.sh
./scripts/sync-all.sh
```

## Key references

- [repo-equivalents.md](reference-matrix/repo-equivalents.md)
- [feature-parity.md](reference-matrix/feature-parity.md)
- [claude-forge/README.md](claude-forge/README.md)
- [codex-forge/README.md](codex-forge/README.md)
- [unified-forge/README.md](unified-forge/README.md)
