const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel');
const moment = require('moment');


const todos = [];

console.log(todos);

/* GET users listing. */
router.get('/', (req, res) => {
    res.send(todos);
});

router.post('/', (req, res) => {
    const created_at = moment().add(3, 'hours').toDate();

    const todo = {
        ...req.body,
        created_at,
    };

    todos.push(todo);

    Todo.forge().save(todo).then((model) => {

        res.send(model);
    });
});

module.exports = router;
