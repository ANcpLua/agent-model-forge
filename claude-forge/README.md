# Claude Forge

`claude-forge` is a Claude-first workspace layout. It treats Claude as the primary operating model, not as a compatibility target.

## Structure

- `.claude/CLAUDE.md` holds durable operating guidance
- `.claude/rules/` holds policy files
- `.claude/agents/` holds role briefs
- `.claude/skills/` holds local skill packages
- `.claude/generated/` holds generated runtime assets projected from `unified-forge`
- `.claude/commands/` holds reusable work instructions
- `.claude/hooks/` holds event examples
- `observability/` holds usage and budget guidance

## Design choices

- Markdown is the human authoring layer.
- Hooks stay small and auditable.
- Skills define explicit output shapes.
- Cost visibility is treated as an operating concern, not a billing afterthought.
- Generated runtime assets are emitted from the unified manifest instead of maintained by hand.
