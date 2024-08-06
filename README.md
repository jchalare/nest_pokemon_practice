<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Install Nest Cli

```bash
$ npm i -g @nestjs/cli
```

## Up database

```bash
$ docker compose up -d
```

## Clone the **.env.template** file and rename to **.env** file

## Fill the variables at **.env** file

## Run seed

```bash
$ localhost:3000/api/v2/seed
```

## Running the app - Dev

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app - Prod Build

1. Create .env.prod file
2. Fill the variables within the prod file
3. Build/Run new docker image:

```bash
# Build
docker compose -f docker-compose.prod.yaml --env-file.env.prod up --build

# Run
docker compose -f docker-compose.prod.yaml --env-file.env.prod up
```

## Seed

```bash
localhost:3000/api/v2/seed
```

## Test

```bash
# unit tests
$ npm run test
```

## Tech Stack

- Mongo DB
- Nest JS
