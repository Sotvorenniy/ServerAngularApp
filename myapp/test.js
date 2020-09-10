const Todo = require('./models/TodoModel');
const User = require('./models/UserModel');


// const newTodo = {
//     title: '333333333333333333333333',
//     completed: true,
//     editing: false,
// };

// Todo.forge().save(newTodo).then((model) => {
//     console.log(model);
//     console.log(newTodo);
// });

// Todo.forge({id: 67}).fetch().then();

// User.forge({ id: 1 }).destroy().then(console.log);

Todo.fetchAll().then((todoList) => {
    console.log(todoList);
});
