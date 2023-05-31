"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Inventories",
			[
				{
					product_id: 1,
					branch_id: 1,
					stock: 6,
				},
				{
					product_id: 2,
					branch_id: 1,
					stock: 10,
				},
				{
					product_id: 3,
					branch_id: 1,
					stock: 2,
				},
				{
					product_id: 4,
					branch_id: 1,
					stock: 5,
				},
				{
					product_id: 1,
					branch_id: 2,
					stock: 2,
				},
				{
					product_id: 2,
					branch_id: 2,
					stock: 5,
				},
				{
					product_id: 3,
					branch_id: 2,
					stock: 5,
				},
				{
					product_id: 4,
					branch_id: 2,
					stock: 8,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Inventories", null, {});
	},
};
