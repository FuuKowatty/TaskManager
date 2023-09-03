setup:
	@make build
	@make up
	@make composer-update
	@make npm-install
build:
	docker-compose build --no-cache --force-rm
stop:
	docker-compose stop
up:
	docker-compose up -d
composer-update:
	docker exec laravel_api bash -c "composer update"
npm-install:
	cd client && npm install
data:
	docker exec laravel_api bash -c "php artisan migrate:fresh --seed"
clear-config:
	docker exec laravel_api bash -c "php artisan config:clear"
	docker exec laravel_api bash -c "php artisan cache:clear"
	docker exec laravel_api bash -c "php artisan optimize"