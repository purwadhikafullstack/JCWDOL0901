"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Transactions",
			[
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 66000,
					created_at: "2023-5-24",
					voucher_discount: 0,
					status_id: 5,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Transactions", null, {});
	},
};
