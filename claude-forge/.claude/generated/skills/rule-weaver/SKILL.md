# Rule Weaver

## Intent

Compile operational guidance into runtime-specific rule carriers.

## Inputs

- policy source
- target runtime
- hard and soft constraints

## Output

Produce:

1. runtime rule files
2. policy notes
3. conflict summary

## Stop Conditions

- all hard constraints are emitted
- soft guidance stays separate from runtime config

## Quality Gate

- do not bury policy inside plugin notes
- keep rule text short and auditable
