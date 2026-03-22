# Rule Sync Map

## Intent

Map one set of operating rules into multiple runtime carriers without changing intent.

## Inputs

- source rules
- target runtimes
- hard boundaries

## Output

Produce:

1. carrier mapping
2. intent-preserving translations
3. conflict notes

## Stop Conditions

- all rules have an explicit carrier in each target runtime

## Quality Gate

- intent must remain stable across carriers
