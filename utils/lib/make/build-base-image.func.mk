define build-base-img
	$(eval DOCKERFILE_PATH=${1})
	$(eval NO_CACHE=${2})

	@echo "\033[1;33m\n -> STARTING  :::  building the base-image. \n \033[0m"
	$(call build-img,utils/lib/docker/Dockerfile.base,base-image,$(NO_CACHE))
	@echo "\033[1;33m\n -> FINISHED  :::  building the base-image. \n \033[0m"
	@sleep 1
endef