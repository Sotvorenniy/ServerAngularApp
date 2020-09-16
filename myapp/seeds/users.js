const crypto = require('crypto');
const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async  function () {
      // Inserts seed entries
      return knex('users').insert([
        {login: 'Sotvorenniy', name: 'Natasha', email: "test@m.ru", token: crypto.randomBytes(64).toString("hex"), password: await bcrypt.hash('123456', 10),},
        {login: 'Kri', name: 'Anna', email: "testtwo@mail.ru", token: crypto.randomBytes(64).toString("hex"),password: await bcrypt.hash('123456', 10),},
      ]);
    });
};
