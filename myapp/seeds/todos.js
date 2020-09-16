
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
          {title: 'Привет', completed: true, user_id: 1,},
          {title: '123', completed: false, user_id: 1,},
          {title: 'Как дела', completed: true, user_id: 2,},
          {title: 'Как дела gfffff', completed: true, user_id: 2,}
      ]);
    });
};
