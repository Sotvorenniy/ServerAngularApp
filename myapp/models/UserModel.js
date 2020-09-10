const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);
const Todo = require('../models/TodoModel');

const User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    todos: function() {
        return this.hasMany(Todo);
    },
    destroy: () => {
        bookshelf.Model.prototype.destroy.apply(this, arguments);
    }
}, {
    dependents: ['todoList']
 }
);

module.exports = User;
