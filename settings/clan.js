var clan = {
	cost: 150000,
	name: 15,
	invite: 5,
	war: {
		time: 25,
		win: {
			budget: 10,
			cups: 1
			}
		},
	rights: ["Участник", "Модератор", "Заместитель"],
	monster_cost: 100000000,
	monsters: [
	{name: "PayziBot", damage: 1e+100, hp: 1e+100, speed: 1, id: 0, text: "Редкий монстр"},
	{name: "Чай", damage: 10, hp: 100, speed: 1, id: 1},
	{name: "Чай1", damage: 120, hp: 100, speed: 10, id: 2}
	],
	shop: [
	{name: "Защита на 24ч.", cost: 10000000, id: 0}
	]
	};
	
	module.exports = {
		clan
		};