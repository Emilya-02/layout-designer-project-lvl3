install:
	npm install

lint:
	npx stylelint ./build/*.css
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./app/*.html

deploy:
	npx surge ./src/
