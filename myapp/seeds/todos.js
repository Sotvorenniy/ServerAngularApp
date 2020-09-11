
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
          {title: 'Привет', completed: true, editing: false, user_id: 1,},
          {title: '123', completed: false, editing: false, user_id: 1,},
          {title: 'Как дела', completed: true, editing: true, user_id: 2,}
      ]);
    });
};
