exports.up = knex =>
  knex.schema.createTable('articles', table => {
    table
      .increments('id')
      .unique()
      .primary()
      .notNullable();
    table
      .string('slug')
      .unique()
      .notNullable();
    table.string('title').notNullable();
    table.text('body').notNullable();
    table.string('description').notNullable();
    table
      .integer('user_id')
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTableIfExists('articles');
