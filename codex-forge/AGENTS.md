# Codex Forge Scope

- Keep runtime behavior explicit in TOML where agent routing matters.
- Use tiered skills to separate stable assets from exploratory ones.
- Do not pretend GUI management features are equivalent to model behavior.
- Keep prompts and rules separate so routing logic stays reviewable.
- In split workspaces, treat `AGENT_FORGE_PROXY_WORKDIR` and `AGENT_FORGE_SNAPSHOT_ROOT` as the primary runtime path surface; use `runtime-path-overrides.md` for the rare escape hatches.
- Treat `.agents/skills/generated/` and `.codex/agents/generated/` as the runtime-active generated surfaces.
- Treat `skills/` as the local catalog and curation surface.
