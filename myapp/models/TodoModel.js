const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);

const Todo = bookshelf.Model.extend({
    tableName: 'todos'
});

module.exports = Todo;
