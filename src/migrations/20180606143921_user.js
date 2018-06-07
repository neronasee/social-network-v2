exports.up = knex =>
  knex.schema.createTable('users', table => {
    table
      .increments('id')
      .unique()
      .primary()
      .notNullable();
    table
      .string('email')
      .unique()
      .notNullable();
    table
      .string('username')
      .unique()
      .notNullable();
    table.string('image').defaultTo('');
    table.text('bio').defaultTo('');
    table.string('password').notNullable();
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
