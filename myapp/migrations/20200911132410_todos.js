
exports.up = function(knex) {
    return knex.schema
        .createTable('todos', function(table) {
            table.increments('id').primary();
            table.string('title');
            table.integer('completed');
            table.integer('user_id');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('todos');
};
