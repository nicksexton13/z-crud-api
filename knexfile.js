/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

let connectionString = process.env.DATABASE_URL;

module.exports = {
	development: {
		client: 'pg',
		connection: connectionString,
		// host: '127.0.0.1',
		// password: 'docker',
		// user: 'postgres',
		// port: 5432,
		// database: 'crud_z',
	},

	staging: {
		client: 'pg',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'pg',
		connection: {
			connectionString,
			ssl: { rejectUnauthorized: false },
			// database: 'my_db',
			// user: 'username',
			// password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
