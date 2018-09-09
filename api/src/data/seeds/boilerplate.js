const table = 'boilerplate';

exports.seed = async knex => {
  await knex(table).del();
  await knex(table).insert([
    { id: '00000000-0000-0000-0000-000000000000', message: 'Hello, World!' },
  ]);
};
