# Simple React & Webapck with Express Server

The goal is to have a small but extensible app setup.

## Running

```sh
# Run Docker in detached state
docker-compose up -d

# View Logs
docker-compose logs
```

## Building Containers

Useful for debugging individual containers.

```sh
# Setup the Client (React & Webpack) Container
cd client
docker build -f Dockerfile -t simple:client .
docker run -it -p 8080:8080 simple:client
open http://localhost:8080/

# Setup the Server (Express) Container
cd server
docker build -f Dockerfile -t simple:server .
docker run -it -p 3000:3000 simple:server
curl -i localhost:3000

# General Docker Tips
# -it is short for --interactive --tty

# Get Container ID
docker ps

# Enter the Container
$ docker exec -it <ContainerID> /bin/bash

# View Logs
docker logs <ContainerID>
```
