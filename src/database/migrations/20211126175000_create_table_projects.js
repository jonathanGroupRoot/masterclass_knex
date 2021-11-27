exports.up = async knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('title')

    // relacionamento
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
  })

exports.down = async knex => knex.schema.dropTable('projects')