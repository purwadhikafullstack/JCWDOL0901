"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Carts",
			[
				{
					user_id: 1,
					inventory_id: 9,
					quantity: 2,
				},
				{
					user_id: 1,
					inventory_id: 22,
					quantity: 1,
				},
				{
					user_id: 1,
					inventory_id: 56,
					quantity: 5,
				},
				{
					user_id: 1,
					inventory_id: 115,
					quantity: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Carts", null, {});
	},
};
