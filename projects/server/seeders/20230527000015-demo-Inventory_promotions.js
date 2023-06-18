"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Inventory_promotions",
			[
				{
					inventory_id: 1,
					value: 5000,
					start_at: "2023-05-23",
					expired_at: "2023-06-23",
					promotion_id: 2,
				},
				{
					inventory_id: 5,
					value: 6000,
					start_at: "2023-05-25",
					expired_at: "2023-06-25",
					promotion_id: 2,
				},
				{
					inventory_id: 6,
					value: 10000,
					start_at: "2023-05-25",
					expired_at: "2023-06-25",
					promotion_id: 2,
				},
				{
					inventory_id: 7,
					value: 10000,
					start_at: "2023-05-25",
					expired_at: "2023-06-25",
					promotion_id: 2,
				},
				{
					inventory_id: 9,
					value: 8000,
					start_at: "2023-05-25",
					expired_at: "2023-08-25",
					promotion_id: 2,
				},
				{
					inventory_id: 22,
					value: 1,
					start_at: "2023-05-25",
					expired_at: "2023-08-25",
					promotion_id: 4,
				},
				{
					inventory_id: 56,
					value: 25,
					start_at: "2023-05-25",
					expired_at: "2023-08-25",
					promotion_id: 3,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Inventory_promotions", null, {});
	},
};
