# Coffee and Tee List - MVST challenge Backend

### Requirements

NodeJS > 12
docker && docker-composer cli

TypesScript: https://code.visualstudio.com/docs/languages/typescript

## Installation

```bash
$ npm install
```

## Running the database with docker

```bash
## start postgres with pgadmin
$ npm run start:dev:db

## start to code
$ npm run start:dev
```

### pgadmin

pgadmin will start on: http://localhost:5050/

User: `root@admin.com`
Password: `root`

### db credentials

```
host: 'localhost'
port: 5432
username: 'postgres'
password: '1234'
database: 'mvst-coffee-tea-challenge-db'
```

## Running the project

npm run start

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

    "start": "nest start",

cambiado
por
"start": "nest start",

        "start": "node dist/main",

        antes start:prod

Camvboanafo archivos
