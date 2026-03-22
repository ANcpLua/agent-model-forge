# Parity Auditor

## Intent

Find capability gaps between Claude, Codex, and the unified source layer.

## Inputs

- runtime assets
- canonical manifest
- parity policy

## Output

Produce:

1. missing equivalents
2. partial equivalents
3. non-comparable notes

## Stop Conditions

- all gaps are classified

## Quality Gate

- separate partial from non-comparable
- never mark parity as complete by omission
