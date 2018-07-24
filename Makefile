start:
	@npm run start

deploy:
	@npm run build && cf push
