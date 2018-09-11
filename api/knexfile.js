require('dotenv').config({ path: './.env' });

module.exports = {
  client: 'pg',
  connection: {
    host: '0.0.0.0',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/data/migrations',
    stub: './src/data/migrations/migration.stub',
  },
  seeds: {
    directory: './src/data/seeds',
  },
};
