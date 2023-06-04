"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Stock_changes",
			[
				{
					inventory_id: 1,
					stock_before: 0,
					stock_after: 10,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 2,
					stock_before: 0,
					stock_after: 10,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 3,
					stock_before: 0,
					stock_after: 3,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 4,
					stock_before: 0,
					stock_after: 6,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 5,
					stock_before: 0,
					stock_after: 10,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 6,
					stock_before: 0,
					stock_after: 8,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 7,
					stock_before: 0,
					stock_after: 5,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 8,
					stock_before: 0,
					stock_after: 10,
					description: "Initial Stock",
					created_at: "2023-05-23",
				},
				{
					inventory_id: 1,
					stock_before: 10,
					stock_after: 4,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 3,
					stock_before: 3,
					stock_after: 2,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 3,
					stock_before: 6,
					stock_after: 5,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 4,
					stock_before: 6,
					stock_after: 2,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 8,
					stock_before: 10,
					stock_after: 9,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 8,
					stock_before: 9,
					stock_after: 8,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 5,
					stock_before: 10,
					stock_after: 2,
					description: "Sales",
					created_at: "2023-05-24",
				},
				{
					inventory_id: 6,
					stock_before: 8,
					stock_after: 5,
					description: "Sales",
					created_at: "2023-05-24",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Stock_changes", null, {});
	},
};
