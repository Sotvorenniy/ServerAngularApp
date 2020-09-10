const knex = require('./db').knex;
const User = require('./models/UserModel');

async function doQuery() {

    try {

        let val = await User.where({ id: 137 }).fetch({
            withRelated: ['todos'], require: true
        });

        console.log(val.toJSON());

    } catch (e) {

        console.log(`Failed to fetch data: ${e}`);
    } finally {

        knex.destroy();
    }
}

doQuery();
