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
					start_at: "2023-05-01",
					expired_at: "2023-06-01",
					promotion_id: 2,
					isActive: false,
				},
				{
					inventory_id: 5,
					value: 6000,
					start_at: "2023-05-25",
					expired_at: "2023-09-25",
					promotion_id: 2,
					isActive: true,
				},
				{
					inventory_id: 6,
					value: 10000,
					start_at: "2023-05-25",
					expired_at: "2023-09-25",
					promotion_id: 2,
					isActive: true,
				},
				{
					inventory_id: 7,
					value: 10000,
					start_at: "2023-05-25",
					expired_at: "2023-09-25",
					promotion_id: 2,
					isActive: true,
				},
				{
					inventory_id: 9,
					value: 8000,
					start_at: "2023-05-25",
					expired_at: "2023-09-25",
					promotion_id: 2,
					isActive: true,
				},
				{
					inventory_id: 22,
					value: 1,
					start_at: "2023-05-25",
					expired_at: "2023-09-25",
					promotion_id: 4,
					isActive: true,
				},
				{
					inventory_id: 56,
					value: 25,
					start_at: "2023-05-25",
					expired_at: "2023-09-25",
					promotion_id: 3,
					isActive: true,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Inventory_promotions", null, {});
	},
};
