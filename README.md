# genadikolev.eu
Source code for my personal website.
 - Built with React.js, TS, Bootstrap
 - Bootstrapped with Vite

# Running locally
### Prerequisites
 - `make` -> Build tool used to automate the containers
   - On Windows you might need to install `WSL` as well to be able to run the tool
 - `docker` -> The app is containerized so that is that ...
   - I've been using the native `docker-engine` on an Ubuntu, but `docker-desktop` should(?) suffice as well on MacOS / Windows

Navigate to `utils/docker/` and open the `.conf` file. Edit these fields
```bash
BASE=<absolute path to the domain>
ORG=<some domain/organisation name, e.g. gmk>
PROJECT=<name of the root dir of the project, e.g. genadikolev.eu (as name of the repo)>
```

Navigate to the root of the project in your console:
```bash
# List all available commands
make

# Start the containers and expose the running app
make start

# Stop (and clear) running containers
make prune-containers
```
# Structure
| DIR | Description |
| :-- | :--: |
| `src/` | Typescript React components |
| `utils/` | Everything related to the containers and running the project out of the box |
| `public/` | .json files and images to edit content on the site
