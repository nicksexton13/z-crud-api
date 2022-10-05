/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex.schema.raw('TRUNCATE items CASCADE');
	await knex('items').del();
	await knex('items').insert([
		{
			user_id: '1',
			itemName: '2022 Kia K5',
			description:
				'This vehicle was submerged underwater, and no longer functions properly.',
			quantity: '1',
		},
		{
			user_id: '1',
			itemName: 'Love Seat',
			description:
				'Have a wife? Girlfriend? You`ll want this loveseat to ensure you stay close to your loved ones.',
			quantity: '2',
		},
		{
			user_id: '1',
			itemName: 'Bus',
			description:
				'This bus? Literally massive. You could fit at least 40 gorillas in it... if you wanted. Why would you? Who knows...',
			quantity: '3',
		},
		{
			user_id: '1',
			itemName: 'RPG-7',
			description:
				'Multiple buses of gorillas barrelling towards you? This is exactly what you should use to defend yourself.',
			quantity: '1',
		},
		{
			user_id: '1',
			itemName: 'Gorillas',
			description:
				'Can`t put gorillas in a bus without the gorillas! Good thing there are hundreds.',
			quantity: '600',
		},
		{
			user_id: '1',
			itemName: 'Guitar',
			description:
				'This guitar was played by Eddie Van Halen himself. Don`t believe it? You shouldn`t, I got it from guiyar center.',
			quantity: '3',
		},
		{
			user_id: '1',
			itemName: 'Unicycle',
			description: 'For when 4 wheels are just wayyyy too many.',
			quantity: '1',
		},
		{
			user_id: '1',
			itemName: '2022 Ford Bronco',
			description: 'OJ didn`t get away. Maybe you will...?',
			quantity: '2',
		},
		{
			user_id: '1',
			itemName: 'Tank',
			description:
				'Not street legal, but who is gonna stop you? Definitely not me.',
			quantity: '7',
		},
		{
			user_id: '1',
			itemName: 'Pen',
			description:
				'Yeah our inventory has been pretty fun so far, and now a pen? Well, the pen is mightier than the sword.',
			quantity: '1000',
		},
		{
			user_id: '1',
			itemName: 'Paper',
			description: 'Pens are useless without paper!',
			quantity: '25',
		},
		{
			user_id: '1',
			itemName: 'Haunted House',
			description:
				'How did we even come into owning a haunted house? I am honestly not sure. ',
			quantity: '1',
		},
	]);
};
