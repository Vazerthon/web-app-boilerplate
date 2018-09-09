import Knex from 'knex';

const {
  DB_HOST, DB_USER, DB_PASS, DB_NAME,
} = process.env;

export default Knex({
  client: 'pg',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
});
