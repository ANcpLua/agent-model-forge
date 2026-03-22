#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "../..");
const manifestPath = path.join(repoRoot, "unified-forge/core/catalog/manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const mode = process.argv[2] ?? "all";

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function resetDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function bulletList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function numberedList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function escapeToml(text) {
  return text.replaceAll('"""', '\\"""');
}

function renderClaudeAgent(agent) {
  return `# ${agent.title}

Role: ${agent.purpose}

Responsibilities:

${bulletList(agent.responsibilities)}

Failure mode:

- ${agent.failureMode}

Evidence standard:

- ${agent.evidenceStandard}
`;
}

function renderCodexAgent(agent) {
  const instructionText = [
    agent.purpose,
    `Responsibilities: ${agent.responsibilities.join("; ")}.`,
    `Failure mode: ${agent.failureMode}.`,
    `Evidence standard: ${agent.evidenceStandard}.`
  ].join(" ");

  return `name = "${agent.id}"
description = "${agent.purpose}"
model = "${agent.codexModel}"
model_reasoning_effort = "${agent.reasoning}"
sandbox_mode = "${agent.sandbox}"

[instructions]
text = """
${escapeToml(instructionText)}
"""
`;
}

function renderSkill(skill) {
  return `# ${skill.title}

## Intent

${skill.purpose}

## Inputs

${bulletList(skill.inputs)}

## Output

Produce:

${numberedList(skill.outputs)}

## Stop Conditions

${bulletList(skill.stopConditions)}

## Quality Gate

${bulletList(skill.qualityGate)}
`;
}

function renderCodexSkillAgentMap(skill) {
  return `runtime: codex
preferred_agent: ${skill.preferredAgent}
review_agent: ${skill.reviewAgent}
tier: ${skill.tier}
`;
}

function renderClaudeRule(rule) {
  return `# ${rule.title}

${bulletList(rule.lines)}
`;
}

function renderCodexRule(rule) {
  return `${rule.lines.join("\n")}\n`;
}

function renderClaudeWorkflow(workflow) {
  return `# ${workflow.title}

When to use:

- ${workflow.when}

Required output:

${numberedList(workflow.requiredOutput)}
`;
}

function renderCodexWorkflow(workflow) {
  return `title = "${workflow.id}"
intent = "${workflow.when}"
required_output = "${workflow.requiredOutput.join(", ")}"
`;
}

function renderHook(hook) {
  return JSON.stringify(
    {
      event: hook.event,
      intent: hook.intent,
      action: hook.action
    },
    null,
    2
  ) + "\n";
}

function writeClaudeOutputs() {
  const outRoot = path.join(repoRoot, "unified-forge/outputs/claude/.claude");
  resetDir(outRoot);
  const runtimeRoot = path.join(repoRoot, "claude-forge/.claude/generated");
  resetDir(runtimeRoot);

  writeFile(
    path.join(outRoot, "README.generated.md"),
    "# Generated Claude Output\n\nThis tree is emitted from `unified-forge/core/catalog/manifest.json`.\n"
  );
  writeFile(
    path.join(runtimeRoot, "README.md"),
    "# Generated Claude Runtime\n\nThis directory is generated from `unified-forge/core/catalog/manifest.json`. Edit the manifest, not these files.\n"
  );

  for (const agent of manifest.agents) {
    const content = renderClaudeAgent(agent);
    writeFile(path.join(outRoot, "agents", `${agent.id}.md`), content);
    writeFile(path.join(runtimeRoot, "agents", `${agent.id}.md`), content);
  }

  for (const skill of manifest.skills) {
    const content = renderSkill(skill);
    writeFile(path.join(outRoot, "skills", skill.id, "SKILL.md"), content);
    writeFile(path.join(runtimeRoot, "skills", skill.id, "SKILL.md"), content);
  }

  for (const rule of manifest.rules) {
    const content = renderClaudeRule(rule);
    writeFile(path.join(outRoot, "rules", `${rule.id}.md`), content);
    writeFile(path.join(runtimeRoot, "rules", `${rule.id}.md`), content);
  }

  for (const workflow of manifest.workflows) {
    const content = renderClaudeWorkflow(workflow);
    writeFile(path.join(outRoot, "commands", `${workflow.id}.md`), content);
    writeFile(path.join(runtimeRoot, "commands", `${workflow.id}.md`), content);
  }

  for (const hook of manifest.hooks) {
    const content = renderHook(hook);
    writeFile(path.join(outRoot, "hooks", `${hook.id}.json`), content);
    writeFile(path.join(runtimeRoot, "hooks", `${hook.id}.json`), content);
  }

  const indexLines = [
    "# Generated Claude Index",
    "",
    `Agents: ${manifest.agents.length}`,
    `Skills: ${manifest.skills.length}`,
    `Rules: ${manifest.rules.length}`,
    `Commands: ${manifest.workflows.length}`,
    `Hooks: ${manifest.hooks.length}`
  ];
  const indexContent = `${indexLines.join("\n")}\n`;
  writeFile(path.join(outRoot, "INDEX.md"), indexContent);
  writeFile(path.join(runtimeRoot, "INDEX.md"), indexContent);
}

function writeCodexOutputs() {
  const outRoot = path.join(repoRoot, "unified-forge/outputs/codex");
  resetDir(outRoot);
  const runtimeAgentRoot = path.join(repoRoot, "codex-forge/.codex/agents/generated");
  const runtimeRuleRoot = path.join(repoRoot, "codex-forge/.codex/rules/generated");
  const runtimePromptRoot = path.join(repoRoot, "codex-forge/.codex/prompts/generated");
  const runtimeHookRoot = path.join(repoRoot, "codex-forge/.codex/hooks/generated");
  const runtimeSkillRoot = path.join(repoRoot, "codex-forge/.agents/skills/generated");
  resetDir(runtimeAgentRoot);
  resetDir(runtimeRuleRoot);
  resetDir(runtimePromptRoot);
  resetDir(runtimeHookRoot);
  resetDir(runtimeSkillRoot);

  writeFile(
    path.join(outRoot, ".codex", "README.generated.md"),
    "# Generated Codex Output\n\nThis tree is emitted from `unified-forge/core/catalog/manifest.json`.\n"
  );
  writeFile(
    path.join(runtimeAgentRoot, "README.md"),
    "# Generated Codex Agents\n\nThese agents are generated from `unified-forge/core/catalog/manifest.json`.\n"
  );
  writeFile(
    path.join(runtimeRuleRoot, "README.md"),
    "# Generated Codex Rules\n\nThese rules are generated from `unified-forge/core/catalog/manifest.json`.\n"
  );
  writeFile(
    path.join(runtimePromptRoot, "README.md"),
    "# Generated Codex Prompts\n\nThese prompts are generated from `unified-forge/core/catalog/manifest.json`.\n"
  );
  writeFile(
    path.join(runtimeHookRoot, "README.md"),
    "# Generated Codex Hooks\n\nThese hooks are generated from `unified-forge/core/catalog/manifest.json`.\n"
  );
  writeFile(
    path.join(repoRoot, "codex-forge/.agents/skills/README.md"),
    "# Runtime Skills\n\nGenerated runtime skills for Codex live in `generated/`. The top-level `skills/` tree remains the local distribution and curation catalog.\n"
  );
  writeFile(
    path.join(runtimeSkillRoot, "README.md"),
    "# Generated Codex Skills\n\nThese skills are generated from `unified-forge/core/catalog/manifest.json`.\n"
  );

  for (const agent of manifest.agents) {
    const content = renderCodexAgent(agent);
    writeFile(path.join(outRoot, ".codex", "agents", `${agent.id}.toml`), content);
    writeFile(path.join(runtimeAgentRoot, `${agent.id}.toml`), content);
  }

  for (const skill of manifest.skills) {
    const skillContent = renderSkill(skill);
    const agentMap = renderCodexSkillAgentMap(skill);
    writeFile(path.join(outRoot, "skills", `.${skill.tier}`, skill.id, "SKILL.md"), skillContent);
    writeFile(path.join(outRoot, "skills", `.${skill.tier}`, skill.id, "agents", "openai.yaml"), agentMap);
    writeFile(path.join(runtimeSkillRoot, `.${skill.tier}`, skill.id, "SKILL.md"), skillContent);
    writeFile(path.join(runtimeSkillRoot, `.${skill.tier}`, skill.id, "agents", "openai.yaml"), agentMap);
  }

  for (const rule of manifest.rules) {
    const content = renderCodexRule(rule);
    writeFile(path.join(outRoot, ".codex", "rules", `${rule.id}.rules`), content);
    writeFile(path.join(runtimeRuleRoot, `${rule.id}.rules`), content);
  }

  for (const workflow of manifest.workflows) {
    const content = renderCodexWorkflow(workflow);
    writeFile(path.join(outRoot, ".codex", "prompts", `${workflow.id}.toml`), content);
    writeFile(path.join(runtimePromptRoot, `${workflow.id}.toml`), content);
  }

  for (const hook of manifest.hooks) {
    const content = renderHook(hook);
    writeFile(path.join(outRoot, ".codex", "hooks", `${hook.id}.json`), content);
    writeFile(path.join(runtimeHookRoot, `${hook.id}.json`), content);
  }

  const indexLines = [
    "# Generated Codex Index",
    "",
    `Agents: ${manifest.agents.length}`,
    `Skills: ${manifest.skills.length}`,
    `Rules: ${manifest.rules.length}`,
    `Prompts: ${manifest.workflows.length}`,
    `Hooks: ${manifest.hooks.length}`
  ];
  const indexContent = `${indexLines.join("\n")}\n`;
  writeFile(path.join(outRoot, ".codex", "INDEX.md"), indexContent);
  writeFile(path.join(repoRoot, "codex-forge/.codex/generated-index.md"), indexContent);
}

function writeParityOutputs() {
  const outRoot = path.join(repoRoot, "unified-forge/outputs");
  ensureDir(outRoot);

  const coverageRows = manifest.sourceCoverage
    .map(
      (row) =>
        `| ${row.sourceRepo} | ${row.capability} | ${row.mappedTo} | ${row.status} |`
    )
    .join("\n");

  const parityReport = `# Generated Parity Report

## Counts

- agents: ${manifest.agents.length}
- skills: ${manifest.skills.length}
- rules: ${manifest.rules.length}
- workflows: ${manifest.workflows.length}
- hooks: ${manifest.hooks.length}

## Source Coverage

| Source repo | Capability | Local mapping | Status |
|---|---|---|---|
${coverageRows}
`;

  writeFile(path.join(outRoot, "parity-report.md"), parityReport);
}

if (mode === "claude" || mode === "all") {
  writeClaudeOutputs();
}

if (mode === "codex" || mode === "all") {
  writeCodexOutputs();
}

if (mode === "parity" || mode === "all") {
  writeParityOutputs();
}

console.log(`generated mode: ${mode}`);
