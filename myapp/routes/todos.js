const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel');
const moment = require('moment');
const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);


/* GET users listing. */
router.get('/', (req, res) => {
    Todo.fetchAll().then((todoList) => {
        res.send(todoList);
    });
});

router.post('/', (req, res) => {
    const created_at = moment().add(3, 'hours').toDate();

    const todo = {
        ...req.body,
        created_at,
    };

    Todo.forge().save(todo).then((model) => {
        // console.log(model);
        res.send(model);
    });
});

 // router.put('/:id', async (req, res) => {
 //     const todo = await Todo.forge({id: req.params.id}).fetch();
 //
 //     const todoJson = JSON.stringify(todo.title);
 //
 //     await todo.
 //
 //     res.send(todoJson, todo.editing = true);
 //
 // });

router.delete('/:id', async (req, res) => {
    const todo = await Todo.forge({id: req.params.id}).fetch();
    const todoJson = JSON.stringify(todo);

    await todo.destroy();

    res.send(todoJson);
});

module.exports = router;
