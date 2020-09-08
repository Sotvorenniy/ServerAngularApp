const express = require('express');
const router = express.Router();
const uuid = require('uuid').v4;
const User = require('../models/UserModel');

const users = [];
/* GET users listing. */
router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
    // console.log(req.body);
    const user = {
        ...req.body
    };
    // console.log('user', user);
    users.push(user);
    User.forge(user).save().then(() => {
        res.send(user);
    });

});

module.exports = router;
