/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex.schema.raw('TRUNCATE users CASCADE');
	await knex('users').del();
	await knex('users').insert([
		{
			firstname: 'Nick',
			lastname: 'Sexton',
			username: 'nickseton',
			password: '123',
		},
	]);
};
