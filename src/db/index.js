const knex = require('knex');

const db = knex({
	client: 'pg',
	connection: {
		host: '104.154.184.155',
		user: 'postgres',
		password: 'v62Dyyk2A18tkjsq',
		database: 'real-estate-learning'
	}
});

module.exports = db;