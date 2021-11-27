exports.up = async knex => knex.schema.createTable('projects', table => {
  table.increments('id')
  table.string('title')

  // relacionamento
  table.integer('user_id')
    .unsigned()
  table.foreign('user_id').references('users.id')
})

exports.down = async knex => knex.schema.dropTable('projects')