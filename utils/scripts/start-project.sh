#!/bin/bash

cd ${HOME_PROJECT_DIR} || exit 1
git config --global --add safe.directory $HOME_PROJECT_DIR

# ensure the apps will be run as non-sudo OS user
# sudo sed -i "/^$APPUSR ALL=(ALL) NOPASSWD:ALL/d" /etc/sudoers

echo -e "  -> Running: bun install"
bun install

echo -e "  -> Running: bun run dev" 
bun run dev

# probably not needed , but nice to have 
trap : TERM INT; sleep infinity & wait

