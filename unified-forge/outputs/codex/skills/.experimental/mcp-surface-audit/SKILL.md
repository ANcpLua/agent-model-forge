# MCP Surface Audit

## Intent

Audit how MCP and resource definitions touch model behavior without hiding policy inside connectors.

## Inputs

- mcp configuration
- resource list
- runtime policies

## Output

Produce:

1. behavioral impact
2. connector-only concerns
3. policy leakage notes

## Stop Conditions

- connector behavior and policy behavior are separated

## Quality Gate

- do not let integration details rewrite model policy
