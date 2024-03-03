#!bin/bash

#-----------------------------------------------------------------
#   referance from: https://docs.docker.com/engine/install/ubuntu/
#-----------------------------------------------------------------


# Uninstall 3-rd party packages that come bundled in with docker
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; \
do sudo apt-get remove $pkg; \
done

# Remove the old docker packages
sudo apt-get purge docker-ce \ 
                   docker-ce-cli \
                   containerd.io \
                   docker-buildx-plugin \
                   docker-compose-plugin \
                   docker-ce-rootless-extras -y


# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install the docker packages
sudo apt-get install docker-ce \
                     docker-ce-cli \
                     containerd.io \
                     docker-buildx-plugin \
                     docker-compose-plugin -y

# Verify docker installation
docker run hello-world

# Verify docker-compose installation
echo "Verify docker-compose installation: "
docker-compose --version