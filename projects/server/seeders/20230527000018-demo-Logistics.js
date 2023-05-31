"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Logistics",
			[
				{
					transaction_id: 1,
					code: "jne",
					service: "OKE",
					shipping_cost: 38000,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Logistics", null, {});
	},
};
