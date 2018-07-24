start:
	@npm run start

deploy:
	@npm run build && cf push

tests:
	@./node_modules/.bin/mocha
