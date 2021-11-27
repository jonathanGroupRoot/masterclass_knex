// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: "knex",
      user: "root",
      password: "root"
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
