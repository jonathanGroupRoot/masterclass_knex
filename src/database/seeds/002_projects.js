
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { user_id: 1, title: "MenuLine" },
        { user_id: 2, title: "SKY-LAB" },
        { user_id: 3, title: "UBER"}
      ]);
    });
};
