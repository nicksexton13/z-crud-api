/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('items', (table) => {
		table.increments('id');
		table.integer('user_id');
		table.foreign('user_id').references('users.id');
		table.string('itemName').notNullable();
		table.string('description');
		table.integer('quantity');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('items');
};
