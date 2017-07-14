// This is how we parse commands:
// http://vorpal.js.org

// This is how the command line is available remotely:
// https://github.com/dthree/vantage#getting-started

// This is how we communicate with the database:
// http://knexjs.org

const vantage = require('vantage')();
const db = require('./src/db');

const say = require('./src/commands/say');

/**
 * Set up commands
 */

vantage
	.command('say [words...]')
	.option('-b, --backwards')
	.description('outputs bar')
	.action(say);

/**
 * Start the server
 */

vantage
	.delimiter('rel~$')
	.listen(process.env.PORT || 8080)
	.show();