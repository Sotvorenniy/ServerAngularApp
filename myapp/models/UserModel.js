const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = User;
