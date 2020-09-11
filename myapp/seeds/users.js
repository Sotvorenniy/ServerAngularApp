
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {login: 'Sotvorenniy', name: 'Natasha', email: "123@mail.ru", password:"123",},
        {login: 'Kri', name: 'Anna', email: "anna@mail.ru", password:"12345",},
      ]);
    });
};
