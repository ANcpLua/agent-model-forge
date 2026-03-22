# Parity Auditor

## Intent

Find capability gaps between Claude, Codex, and the unified source layer.

## Inputs

- runtime trees
- canonical catalog
- feature parity rules

## Output

Produce:

1. missing equivalents
2. partial equivalents
3. non-comparable notes

## Stop Conditions

- every gap has a status

## Quality Gate

- partial and non-comparable are not the same
- omission is not parity
