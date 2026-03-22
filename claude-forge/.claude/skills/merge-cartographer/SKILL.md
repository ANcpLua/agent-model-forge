# Merge Cartographer

## Intent

Map multiple upstream repositories into one local design without flattening important differences.

## Inputs

- source repositories
- target local design
- list of exclusions

## Output

Produce:

1. retained capabilities
2. local equivalents
3. non-comparable features
4. implementation order

## Stop Conditions

- every retained capability has a local home
- every excluded feature is named explicitly

## Quality Gate

- do not force false equivalence
- keep GUI-only behavior out of model-core design
