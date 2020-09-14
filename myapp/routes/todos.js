const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel');
const User = require('../models/UserModel');
const moment = require('moment');
const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);

router.use((req, res, next) => {
    if (req.headers.token) {
        User.forge({token: req.headers.token}).fetch().then((currentUser) => {
            req.currentUser = currentUser;
            next();
        }).catch(() => {
            res.status(404).send('Not Found');
        });
    } else {
        return res.status(401).send('Unauthorized');
    }
});


/* GET users listing. */
// router.get('/', (req, res) => {
//     Todo.fetchAll().then((todoList) => {
//         res.send(todoList);
//     });
// });


router.get('/',(req, res) => {
    req.currentUser.todos().fetch().then((todoList) => {
        res.send(todoList);
    });
});

router.post('/', (req, res) => {
    const {title, completed, editing} = req.body;

    req.currentUser.related('todos').create({title, completed, editing}).then((model) => {
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
    const todo = await Todo.forge({id: req.params.id, user_id: req.currentUser.id}).fetch();
    const todoJson = JSON.stringify(todo);

    await todo.destroy();

    res.send(todoJson);
});

module.exports = router;
