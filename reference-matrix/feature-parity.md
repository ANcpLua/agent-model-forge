# Feature Parity

| Capability area | Claude local design | Codex local design | Unified equivalent | Reference pressure | Comparison status |
|---|---|---|---|---|---|
| agent roles | Markdown role files in `.claude/agents/` | TOML agent files in `.codex/agents/` | manifest `agents[]` plus emitter | `awesome-codex-subagents`, `everything-claude-code` | comparable |
| skill catalog | flat Claude skill folders | tiered skill packs under `.system`, `.curated`, `.experimental` | manifest `skills[]` plus runtime renderers | `antigravity-awesome-skills`, `openai/skills`, `skrills` | comparable |
| skill lifecycle and curation | manual local authoring | tiered maturity and agent metadata | manifest ownership and tier fields | `skrills`, `openai/skills` | comparable |
| codex official control surfaces | not primary | `AGENTS.md`, `.agents/skills/generated/`, `.codex/agents/generated/` | manifest-driven runtime projection | `ANcpLua/codex-repo-template`, `openai/skills` | codex-biased but comparable |
| runtime path bootstrap | local defaults and directory adjacency | two-core-variable path overrides with separate escape hatches | documented runtime path contract | `ANcpLua/codex-repo-template`, `everything-claude-code` | codex-biased but comparable |
| rules and memory | `.claude/rules/` and `CLAUDE.md` | `.codex/rules/` and runtime config | manifest `rules[]` | `ai-rules-sync`, `everything-claude-code` | comparable |
| commands and prompts | Markdown command briefs | TOML prompt manifests | manifest `workflows[]` | `everything-claude-code`, `openai/skills` | comparable |
| prompt-contract discipline | command briefs with explicit required output | generated prompt manifests and plan gating | workflow definitions plus `plan-critic` | `ANcpLua/codex-repo-template`, `everything-claude-code` | comparable |
| hooks | event JSON examples | event JSON examples | manifest `hooks[]` | `everything-claude-code` | comparable |
| mcp and resource posture | notes and examples | notes and examples | documented policy only | `cc-switch`, `skrills`, `ccusage` | partially comparable |
| usage telemetry | Claude usage notes and budget policy | Codex usage notes and budget policy | observability policy and generated ops skills | `ccusage` | comparable |
| session distillation | skillized post-session knowledge capture | skillized post-session knowledge capture | shared skill asset | `everything-claude-code`, `skrills` | comparable |
| cross-runtime generation | not native | not native | `unified-forge` generator | `skrills`, `ai-rules-sync`, `openai/skills` | comparable |
| tree simplicity and root discipline | moderate | stricter root discipline | `structure-steward` plus parity docs | `ANcpLua/codex-repo-template` | partially comparable |
| gui account switching | not implemented | not implemented | documented as out of scope | `cc-switch`, `cockpit-tools` | non-comparable |
| provider relay management | not implemented | not implemented | documented as out of scope | `cc-switch` | non-comparable |
| desktop multi-instance lifecycle | not implemented | not implemented | documented as out of scope | `cockpit-tools`, `cc-switch` | non-comparable |
| account quota dashboards | not implemented | not implemented | replaced by model-core telemetry notes | `cockpit-tools`, `cc-switch`, `ccusage` | non-comparable |
