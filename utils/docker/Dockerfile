FROM oven/bun:alpine

ARG UID
ARG GID
ARG APPUSR
ARG APPGRP
ARG HOME_DIR
ARG HOME_PROJECT_DIR

RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    bash binutils git vim nano perl jq wget openssh \
    curl zip unzip busybox-extras \
    su-exec sudo shadow net-tools \
    build-base gcc openssl-dev git \
    libmagic make jq zlib-dev \
    util-linux rsync
SHELL ["/bin/bash", "-c"]

RUN if getent group ${GID}; \
  then groupmod -g $((GID+3333)) $(getent group ${GID} | cut -d: -f1); fi
RUN if getent passwd ${UID}; \
  then usermod -u $((UID+3333)) $(getent passwd ${UID} | cut -d: -f1); fi

# START ::: add-os-user
RUN set -x ; \
    echo "GID: ${GID}, APPGRP: ${APPGRP}, APPUSR: ${APPUSR}" && \
    groupadd -g ${GID} ${APPGRP} && \
    useradd \
     --gid ${GID} \
     --non-unique \
     --shell "/bin/bash" \
     --home-dir "${HOME_DIR}" \
     --uid ${UID} \
     --groups ${APPGRP} ${APPUSR} && exit 0 ; exit 1


RUN mkdir -p "${HOME_DIR}" && chown ${APPUSR}:${APPGRP} "${HOME_DIR}"

RUN echo "${APPUSR} ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
RUN echo "${APPGRP} ALL=(ALL) NOPASSWD: /usr/bin/npm" >> /etc/sudoers

RUN echo "export PS1='\$(date +\"%F %T\") \u@\h  \w \n '" >> ${HOME_DIR}/.bashrc && \
  echo "cd ${HOME_PROJECT_DIR}" >> ${HOME_DIR}/.bashrc && \
  chown -R ${APPUSR}:${APPGRP} ${HOME_DIR} && \
  chmod -R 0775 ${HOME_DIR}


USER ${APPUSR}


