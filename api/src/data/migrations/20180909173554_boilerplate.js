exports.up = async knex => {
  await knex.schema.createTable('boilerplate', table => {
    table.uuid('id').primary();
    table.string('message').notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('boilerplate');
};
