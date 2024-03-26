.PHONY: prune-containers ## @-> 99.99 GLOBAL !!! Stop & wipe out all containers/images + cache
prune-containers:
	@clear
	@if [ "$$(docker ps -q)" != '' ]; then \
		docker kill $$(docker ps -q); \
	fi
	@if [ "$$(docker ps -aq)" != '' ]; then \
		docker rm $$(docker ps -aq); \
	fi
	@docker system prune --volumes -af

