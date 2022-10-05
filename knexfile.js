/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

let connectionstring = process.env.DATABSE_URL;

module.exports = {
	development: {
		client: 'postgresql',
		connection: connectionstring,
		// host: '127.0.0.1',
		// password: 'docker',
		// user: 'postgres',
		// port: 5432,
		// database: 'crud_z',
	},

	staging: {
		client: 'postgresql',
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
		client: 'postgresql',
		connection: {
			connectionstring,
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
