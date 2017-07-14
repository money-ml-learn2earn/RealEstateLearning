const db = require('../db');

module.exports = async (args, callback) => {
	const users = await db.table('users');
	console.log(users);

	if (args.options.backwards) {
		console.log(args.words.reverse().join(' '));
	} else {
		console.log(args.words.join(' '));
	}

	callback();
};