# Codex Forge

`codex-forge` is a Codex-first workspace layout. It assumes the runtime wants explicit agent manifests, explicit skill tiers, and a more configuration-heavy control surface than the Claude tree.

## Structure

- `.codex/config.toml` for runtime defaults
- `.agents/skills/generated/` for generated runtime skills
- `.codex/agents/` for role manifests
- `.codex/rules/` for hard operating rules
- `.codex/prompts/` for reusable request scaffolds
- `.codex/hooks/` for event examples
- `skills/` for tiered capability packs and catalog curation
- `observability/` for usage posture and budget notes

## Design choices

- TOML is used where runtime-like structure matters.
- Skills are tiered by trust and maturity.
- Agents declare sandbox posture and review burden directly.
- The active Codex runtime surface is generated into `.agents/skills/generated/` and `.codex/agents/generated/`.

## Runtime path posture

For split workspaces, prefer explicit repo-local environment variables over repo-root guessing.

- normal setup: `AGENT_FORGE_PROXY_WORKDIR` and `AGENT_FORGE_SNAPSHOT_ROOT`
- rare escape hatches: `AGENT_FORGE_PROXY_URL` and `AGENT_FORGE_CLI_PATH`

See [runtime-path-overrides.md](runtime-path-overrides.md).
