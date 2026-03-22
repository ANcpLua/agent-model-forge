# Execution Brief

## Intent

Force current state, target state, delta, and exact files before implementation.

## Inputs

- task request
- current state
- target state

## Output

Produce:

1. current state
2. target state
3. delta
4. exact files

## Stop Conditions

- the changed file set is named

## Quality Gate

- reject vague file scopes
- reject branchy plans without a recommendation
