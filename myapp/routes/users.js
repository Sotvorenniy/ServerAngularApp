const express = require('express');
const router = express.Router();
const uuid = require('uuid').v4;
const users = [];
/* GET users listing. */
router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
    // console.log(req.body);
    const user = {
        id: uuid(),
        ...req.body
    };
    // console.log('user', user);
    users.push(user);
    res.send({ email: user.email, login: user.login, name: user.name});
});

module.exports = router;
