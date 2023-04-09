## Nest.js + GraphQL + Prisma + DDD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Start Up of MySQL
```bash
$ make mysql-start
```

## Initialize of Prisma
```
$ npx prisma init
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Explore the data in Prisma Studio
Prisma comes with a built-in GUI to view and edit the data in your database.
```bash
$ npx prisma studio
```

## Start Up of GraphQL Client
```bash
$ yarn start:dev
$ open http:localhost:3000/graphql
```

## Run a migration to create your database tables with Prisma Migrate
```bash
$ npx prisma migrate dev --name <- MigrationName ->
```
