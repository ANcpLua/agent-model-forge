.PHONY: lint validate sync smoke

lint:
	./scripts/lint-all.sh

validate:
	./scripts/validate-all.sh

sync:
	./scripts/sync-all.sh

smoke:
	./scripts/run-smoke-all.sh
