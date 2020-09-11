const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const crypto = require('crypto');

const users = [];
/* GET users listing. */
router.get('/', (req, res) => {

    User.fetchAll().then((userList) => {
        res.send(userList);
    });

    // User.forge({email: req.params.email, password: req.params.password}).fetch()
    //   .then((user) => {
    //       res.send(user);
    //   })
    //   .catch(() => {
    //       res.status(404).send('Not Found');
    //   });
});

router.post('/', (req, res) => {
    // console.log(req.body);

    const token = crypto.randomBytes(64).toString("hex");

    const user = {
        ...req.body,
        token
    };
    // console.log('user', user);
    users.push(user);

    User.forge(user).save().then((model) => {
        res.send(model);
    });
});

module.exports = router;
