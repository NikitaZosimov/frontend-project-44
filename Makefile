install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dru-run
lint:
	npx eslint .