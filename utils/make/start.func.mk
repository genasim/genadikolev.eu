.PHONY: start  ## @-> 01.00 start project containers
start:
	@clear
	@export DOCKER_BUILDKIT=1; ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} down --rmi all \
	&& ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} build \
	&& ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} up -d

.PHONY: start-no-cache  ## @-> 01.01 start project containers W/O cache
start-no-cache:
	@clear
	@export DOCKER_BUILDKIT=1; ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} down --rmi all \
	&& ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} build --no-cache \
	&& ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE_ALL} up -d
	