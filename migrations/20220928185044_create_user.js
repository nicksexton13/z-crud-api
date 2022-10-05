/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id');
		table.string('firstname').notNullable();
		table.string('lastname').notNullable();
		table.string('username').unique().notNullable();
		//the password needs to be encrypted but lets get the databse up and running
		table.string('password').notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
