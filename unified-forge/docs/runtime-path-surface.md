# Runtime Path Surface

When a runtime is used from a split workspace, path discovery should be fallback behavior, not the primary contract.

The shared rule in this repo is:

- expose two core path inputs
- keep rare escape hatches separate
- do not make agents guess a fake repo root when the workspace is already split

## Core inputs

- helper workdir
  The directory where the local helper or proxy app can be started.
- snapshot root
  The directory where test or review snapshots are written.

These two inputs cover the common split-workspace case without leaking every internal path decision into the public surface.

## Rare escape hatches

- helper URL
  Use this only when a helper is already running and the runtime should connect instead of starting one.
- CLI path
  Use this only when the runtime must be forced to a specific CLI binary or script.

These are valid controls, but they are not the normal setup path.

## Design constraint

- one concern per variable
- helper URL replaces helper workdir for that run
- CLI path is optional, not mandatory
- variable names should be repo-local and descriptive; the canonical layer defines the shape, not the exact names
