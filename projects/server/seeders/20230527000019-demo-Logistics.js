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
					shipping_cost: 58000,
				},
				{
					transaction_id: 2,
					code: "jne",
					service: "REG",
					shipping_cost: 38000,
				},
				{
					transaction_id: 3,
					code: "jne",
					service: "REG",
					shipping_cost: 38000,
				},
				{
					transaction_id: 4,
					code: "jne",
					service: "OKE",
					shipping_cost: 58000,
				},
				{
					transaction_id: 5,
					code: "jne",
					service: "REG",
					shipping_cost: 38000,
				},
				{
					transaction_id: 6,
					code: "jne",
					service: "REG",
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
