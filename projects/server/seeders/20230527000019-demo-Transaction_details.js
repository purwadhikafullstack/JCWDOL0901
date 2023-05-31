"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Transaction_details",
			[
				{
					transaction_id: 1,
					inventory_id: 1,
					name: "Hydrophonic - Spinach",
					quantity: 2,
					price: 25000,
					branch_discount: 10000,
				},
				{
					transaction_id: 1,
					inventory_id: 4,
					name: "Pringles Keju (25% Bonus)",
					quantity: 1,
					price: 26000,
					branch_discount: 0,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Transaction_details", null, {});
	},
};
