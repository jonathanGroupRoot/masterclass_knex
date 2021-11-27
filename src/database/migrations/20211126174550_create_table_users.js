exports.up = async knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.timestamp('deleted_at').defaultTo(null)
  })

exports.down = async knex => knex.schema.dropTable('users')