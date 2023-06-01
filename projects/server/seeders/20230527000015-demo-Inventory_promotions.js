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
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Inventory_promotions", null, {});
	},
};
