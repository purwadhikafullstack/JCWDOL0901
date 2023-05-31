"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Carts",
			[
				{
					user_id: 1,
					inventory_id: 1,
					quantity: 2,
				},
				{
					user_id: 1,
					inventory_id: 2,
					quantity: 1,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Carts", null, {});
	},
};
