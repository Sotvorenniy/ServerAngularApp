
exports.up = function(knex) {
    return knex.schema
        .createTable('todos', function(table) {
            table.increments('id').primary();
            table.string('title');
            table.integer('completed');
            table.integer('editing');
            table.integer('user_id');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('todos');
};
