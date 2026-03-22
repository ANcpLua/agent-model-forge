# Forge Runtime Path Overrides

`codex-forge` treats split-workspace bootstrapping as explicit runtime configuration, not guessed repo shape.

In this repo, an environment variable means a shell setting such as:

```bash
export AGENT_FORGE_PROXY_WORKDIR=/absolute/path/to/helper
```

These names are local to this repo. They are not presented as official Codex or OpenAI environment variables.

## Core variables

- `AGENT_FORGE_PROXY_WORKDIR`
  Directory that contains the local helper or proxy app the Codex-facing harness should start.
- `AGENT_FORGE_SNAPSHOT_ROOT`
  Directory where snapshot files should be written.

These two variables cover the normal split-workspace case.

## Rare overrides

- `AGENT_FORGE_PROXY_URL`
  Absolute URL for an already-running helper or proxy. Use this instead of `AGENT_FORGE_PROXY_WORKDIR` when the helper is already live.
- `AGENT_FORGE_CLI_PATH`
  Absolute path to a specific CLI binary or script. Use this only when the runtime must not rely on normal CLI resolution.

## Minimal setup

If the helper is local and snapshots need a stable home, set only:

```bash
export AGENT_FORGE_PROXY_WORKDIR=/absolute/path/to/helper
export AGENT_FORGE_SNAPSHOT_ROOT=/absolute/path/to/snapshots
```

## Decision rule

- local helper to start: set `AGENT_FORGE_PROXY_WORKDIR`
- already-running helper: set `AGENT_FORGE_PROXY_URL`
- stable snapshot location: set `AGENT_FORGE_SNAPSHOT_ROOT`
- forced CLI binary: set `AGENT_FORGE_CLI_PATH`

Do not set every variable by default. Set the smallest surface that answers the current path question.
