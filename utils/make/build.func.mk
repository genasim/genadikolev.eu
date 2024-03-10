.PHONY: build  ## @-> 02.00 build the project
build:
	@clear
	@echo "\033[1;33m -> STARTING  :::  building production files \n \033[0m"
	docker exec $(WUI_CONTAINER_NAME) bash ${HOME_PROJECT_DIR}/utils/scripts/build-project.sh
	@echo "\033[1;33m -> FINISHED  :::  building production files \n \033[0m"
