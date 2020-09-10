const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);

const Todo = bookshelf.Model.extend({
    tableName: 'todos',
    idAttribute: 'id',
    // todoList: function() { return this.belongsTo(User) },
});


module.exports = Todo;
