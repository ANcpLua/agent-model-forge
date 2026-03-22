# Agent Model Forge Instructions

## Working contract

- Update `unified-forge` first when a capability exists in both runtimes.
- Keep runtime-specific files small and explicit.
- Use local names and local examples only.
- Document non-comparable features in the reference matrix instead of hiding them.

## Asset contract

Every skill should define:

- intent
- inputs
- output shape
- stop conditions
- quality gate

Every agent should define:

- role
- authority boundary
- failure mode
- evidence standard

## Change rule

- If Claude and Codex diverge, record the delta in `reference-matrix/feature-parity.md`.
