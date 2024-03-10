#!/bin/bash

# Source the bash session to ensure the bun command is visible
# Otherwise below bun invocations will fail
source ~/.bashrc

cd ${HOME_PROJECT_DIR} || exit 1

# ensure the apps will be run as non-sudo OS user
# sudo sed -i "/^$APPUSR ALL=(ALL) NOPASSWD:ALL/d" /etc/sudoers

echo "  -> Running: bun run build" 
bun run build