// TODO use environment variables in knexfile
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'boilerplate',
      password: 'boilerplate',
      database: 'boilerplate',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/data/migrations',
      stub: './src/data/migrations/migration.stub',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },
};
