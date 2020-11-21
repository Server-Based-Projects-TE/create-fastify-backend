# Create Fastify Backend

## Environment

| **Variable** | **Description**                      | **Default**                                  |
| ------------ | ------------------------------------ | -------------------------------------------- |
| NODE_HOST    | Host address to listen               | 127.0.0.1                                    |
| NODE_PORT    | Port to listen                       | 3000                                         |
| NODE_ENV     | Environment                          | development                                  |
| REDIS_URI    | Redis connection uri                 | redis://localhost:6379/1                     |
| SESSION_KEY  | Private key used for session signing | U7SkyCUsC5NE5q1VgSNouUGZYE/iYdPlS7IkZj0MziA= |
| SESSION_TTL  | Time To Live of user sessions        | 864e2 (1 day in seconds)                     |

## Scripts

| **Script**  | **Description**                        |
| ----------- | -------------------------------------- |
| start       | Run in development with livereload     |
| inspect     | Inspect runtime with developer tools   |
| build       | Compile with TypeScript                |
| test        | Run unit tests with Jest               |
| typecheck   | Run typechecking tests with TypeScript |
| prettycheck | Run prettier code styling tests        |
| lint        | Check eslint rules                     |

## Documentation

- [Fastify - Getting Started](https://www.fastify.io/docs/latest/Getting-Started/)
- [Fastify - Typescript](https://www.fastify.io/docs/latest/TypeScript/)
- [Fastify - Testing](https://www.fastify.io/docs/latest/Testing)
