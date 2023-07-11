"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Promotions",
			[
				{
					name: "Gratis Ongkir",
				},
				{
					name: "Diskon Nominal",
				},
				{
					name: "Diskon Persen",
				},
				{
					name: "Buy One Get One",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Promotions", null, {});
	},
};
