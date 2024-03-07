.PHONY: start  ## @-> 01.00 start project containers
start:
	@clear
	@export DOCKER_BUILDKIT=1; ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} down --rmi all \
	$(call build-base-img,)

	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} build
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} up -d
	
	@echo "before attaching run: \e[1mdocker logs ${WUI_CONTAINER_NAME}\e[0m"
	@echo "to attach run: \e[1mdocker exec -it ${WUI_CONTAINER_NAME} bash\e[0m"
	@echo "WUI running on: \e[1mhttp://localhost:${WUI_PORT}\e[0m"
	@echo "\n"



.PHONY: start-no-cache  ## @-> 01.01 start project containers W/O cache
start-no-cache:
	@clear
	@export DOCKER_BUILDKIT=1; ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} down --rmi all \
	$(call build-base-img,--no-cache)
	
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} build --no-cache \
	${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} up -d
	
	@echo "before attaching run: \e[1mdocker logs ${WUI_CONTAINER_NAME}\e[0m"
	@echo "to attach run: \e[1mdocker exec -it ${WUI_CONTAINER_NAME} bash\e[0m"
	@echo "WUI running on: \e[1mhttp://localhost:${WUI_PORT}\e[0m"
	@echo "\n"