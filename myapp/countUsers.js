const knex = require('./db').knex;
const Todo = require('./models/TodoModel');


Todo.count().then((count) => {
    console.log(`There are ${count} todos`);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    knex.destroy();
});
