mysql-start:
	docker-compose up -d

mysql-down:
	docker-compose down -v

mysql-entry:
	docker-compose exec mysql mysql -u user100 -p

mysql-root-entry:
	docker-compose exec mysql mysql -u root -p
