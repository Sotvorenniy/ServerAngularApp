const Todo = require('./models/TodoModel');

const newTodo = {
    title: '333333333333333333333333',
    completed: true,
    editing: false,
};

// Todo.forge().save(newTodo).then((model) => {
//     console.log(model);
//     console.log(newTodo);
// });

Todo.forge({id: 67}).fetch().then(console.log);
