define build-img
	$(eval DOCKERFILE_PATH=${1})
	$(eval TAG=${2})
	$(eval NO_CACHE=${3})

	@docker build . -t $(TAG) $(NO_CACHE) \
		--build-arg UID=${UID} \
		--build-arg GID=${GID} \
		--build-arg APPUSR=${APPUSR} \
		--build-arg APPGRP=${APPGRP} \
		--build-arg HOME_DIR=${HOME_DIR} \
		--build-arg HOME_ORG_DIR=${HOME_ORG_DIR} \
		--build-arg HOME_PROJECT_DIR=${HOME_PROJECT_DIR} \
		-f $(DOCKERFILE_PATH)
	@sleep 1
endef