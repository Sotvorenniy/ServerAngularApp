const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
// const users = [];
/* GET users listing. */
// router.get('/login', (req, res) => {
//
//     User.fetchAll().then((userList) => {
//         res.send(userList);
//     });
// });


// router.get('/:id', (req, res) => {
//
//     User.where({ 'id': req.params.id }).fetch({
//         withRelated: ['todos'], require: false
//     }).then( (todoList) => {
//         res.send(todoList.toJSON());
//     });
// });




router.post('/', async (req, res) => {

    const token = crypto.randomBytes(64).toString("hex");

    const user = {
        ...req.body,
        token
    };
    try {
        const isExists = await User.where({ 'email': req.body.email }).fetch({ require: false });
        if(isExists) {
            return res.status(400).send({ message: 'User already exists' });
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        const model = (await User.forge({ ...user, password: hash }).save()).serialize();
        return res.send({ email: model.email, id: model.id, name: model.name, login: model.login });
    } catch(err) {
        console.log('ERROR IN POST/USERS', err);
        return res.status(400).send({ message: err.message })
    }
});

router.post('/login', async(req, res) => {

    const { email, password } = req.body;

    let user = (await User.where({ email: req.body.email }).fetch({ require: false }));
    if(!user) {
        return res.status(401).send({ message: 'No user with this email' });
    }
    user = user.toJSON();
    if(await bcrypt.compare(password, user.password)) {
        return res.send({ email: user.email, id: user.id, name: user.name, login: user.login, token: user.token })
    }
    return res.status(401).send({ message: 'passwords does not match' })
});


module.exports = router;
