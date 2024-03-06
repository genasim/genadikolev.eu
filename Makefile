include $(wildcard ./utils/docker/.conf)
export

include $(wildcard ./utils/make/*.func.mk)
include $(wildcard ./utils/lib/make/*.func.mk)

DOCKER_COMPOSE_FILE_ALL := utils/docker/docker-compose.yaml
DOCKER_COMPOSE_CMD := $(shell [ $$(uname -s) != "Linux" ] && echo "docker compose" || echo "docker-compose")
DOCKER_BUILDKIT := $(or 1,$(shell echo $$DOCKER_BUILDKIT))

.DEFAULT_GOAL := help

help:
	@clear
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep|sed -e 's/^\.PHONY: //'|sed -e 's/^\(.*\)##/\1/' | \
      column -t -s $$'@'|sort -k2
