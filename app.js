const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex')(
	require('./knexfile.js')[process.env.NODE_ENV || 'development']
);
// var cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const e = require('express');
//this does a salt and hash

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/items', (req, res) => {
	return knex('items')
		.select('*')
		.then((data) => {
			res.json(data);
			console.log(data);
		});
});
app.get('/users', (req, res) => {
	return knex('users')
		.select('*')
		.then((data) => {
			res.json(data);
			console.log(data);
		});
});
app.get('/items/:id', (req, res) => {
	knex
		.select('items.id', 'user_id', 'itemName', 'description', 'quantity')
		.from('items')
		.leftJoin('users', 'items.user_id', 'users.id')
		.where('items.user_id', req.params.id)
		.then((data) => {
			console.log(data);
			res.send(data);
		});
});

app.post('/register', async (req, res) => {
	try {
		const hash = await bcrypt.hashSync(req.body.password, 10);
		await knex('users').insert({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			username: req.body.username,
			password: hash,
		});
		res.status(200).json('All good!');
	} catch (e) {
		console.log(e);
		res.status(500).send(e, 'Something went wrong!');
	}
});

app.post('/login', async (req, res) => {
	try {
		const user = await knex('users')
			.first('*')
			.where({ username: req.body.username });
		if (user) {
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (validPassword == true) {
				//this is where we will send a cookie or authentication token!!!!
				res.status(200).json(user);
			} else {
				res.status(404).json('Wrong password.');
			}
		} else {
			res.status(404).json('User not found!');
			console.log('User not found!');
		}
	} catch (e) {
		console.log(e);
		res.status(500).send('Something went wrong!');
	}
});

app.post('/users', (req, res) => {
	return knex('users')
		.insert(req.body)
		.then(() => res.send({ message: 'We have posted a user.' }))
		.catch((err) => res.status(500).send(err));
});
app.post('/items', (req, res) => {
	console.log(req.body);
	return knex('items')
		.insert(req.body)
		.then(() => res.send({ message: 'We have posted an item.' }))
		.catch((err) => res.status(500).send(err));
});
// app.get('/items/:id', (req, res) => {
// 	console.log(req.body);
// 	console.log(req.params);
// 	const { id } = req.params;
// 	return knex('items').where({
// 		id: id,
// 	});

// });
app.patch('/items/:id', async (req, res) => {
	console.log('req.body', req.body);
	console.log('req.params', req.params);
	const results = await knex('items').where('id', req.body.id).update(req.body);
	res.send('We have edited the item.');
	return results;
});
app.delete('/items', async (req, res) => {
	const id = req.params.id;
	const results = await knex('items').del();
	res.send('We have deleted all items.');
	return results;
});
app.delete('/items/:id', async (req, res) => {
	const id = req.params.id;
	const results = await knex('items').where('id', id).del();
	res.send('We have deleted the item.');
	return results;
});

app.listen(8080, () => {
	console.log(`Your app is running on port 8080`);
});
