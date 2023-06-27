# Express Typescript Boilerplate
This repository contains the code for the boilerplate of the Express Typescript.


- APIs for Authentication

## Stack
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [MongoDB] - Database
- [Redis] - Caching DB

## Installation (Docker)

- Pull the code from repository.
- Setup the Redis DB on your Host machine / Docker 
- Create a .env file in the project root with the following configuration:
```sh
NODE_ENV=development
PORT=4001
APP_KEY=testKey

DB_URL = 
DB_NAME = 

REDIS_URL=redis://localhost:6379
```
Once you are done, run the Docker image and map the port to your desired value on your host machine. In this project, we are mapping port 4001 of the host to port 8080 of the Docker container (or any other port that has been exposed in the Dockerfile and docker-compose.yml).

```sh
cd <PROJECT_ROOT>
docker compose up --build
```

Package Installation
```sh
docker exec -it ts-express-boilerplate npm i
```

To verify the project setup, open your preferred browser and navigate to the server address.

```sh
127.0.0.1:4001/health
```
