# web-app-boilerplate

## What is this?

Boilerplate setup for a static React app backed by a Koa API. A bunch of technologies I'm familiar/comfortable with, set up in a way that should hopefully get new projects off the ground quickly.

## What's in the box?

### Server
- Main technologies - Node, Koa and Koa-router, Knex and Objection connected to Postres
- Docker - Docker and docker-compose are set up to monitor the `src` directory and provide hot reloading while in dev.

### Client
- A `create-react-app` web client 

## Environment Variables

- `DB_USER` - Database username (server)
- `DB_PASS` - Database password (server)
- `DB_NAME` - Database name (server)
- `DB_HOST` - Database hostname (server) - must be the same as the service name and link set in `docker-compose.yml`, currently set to `db`

## Scripts

- `npm start` should spin up the docker compose stack
- `npm run db migrate:latest` in the `api` directory should run a migration to add a test table
- `npm run db seed:run` in the `api` directory should seed that table with a `hello, world` message
- while the stack is running `curl localhost:3001` will return the seeded hello world message

## TODO
- Set up CI
- Set up hosting
- Prod docker file