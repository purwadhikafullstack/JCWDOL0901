"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Categories",
			[
				{
					name: "Snack",
					image: "/public/images/categories/snack.png",
				},
				{
					name: "Air Mineral",
					image: "/public/images/categories/drinks.png",
				},
				{
					name: "Mie Instan",
					image: "/public/images/categories/instant_noodle.png",
				},
				{
					name: "Buah",
					image: "/public/images/categories/fruits.png",
				},
				{
					name: "Sayur",
					image: "/public/images/categories/vegetables.png",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Categories", null, {});
	},
};
