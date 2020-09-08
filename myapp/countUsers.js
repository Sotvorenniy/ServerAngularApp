const knex = require('./db').knex;
const User = require('./models/UserModel');

User.count().then((count) => {
    console.log(`There are ${count} users`);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    knex.destroy();
});
