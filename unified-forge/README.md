# Unified Forge

`unified-forge` is the canonical source layer. It does not assume Claude or Codex as the authoring model. It stores the shared asset contracts, catalog metadata, and manifest-driven adapter scripts that emit runtime-specific views.

## Purpose

- define canonical asset types
- document what maps cleanly across runtimes
- generate concrete Claude and Codex trees from one manifest

## Layout

- `core/catalog/` for asset inventory
- `core/catalog/manifest.json` for the generator input
- `core/contracts/` for canonical schemas
- `core/registry/` for mapping and notes
- `adapters/` for emitters
- `outputs/` for generated runtime markers
- `tests/` for equivalence and contract smoke checks
