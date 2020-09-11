
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('login');
            table.string('name');
            table.string('last_name');
            table.string('email');
            table.string('password');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('users');
};

