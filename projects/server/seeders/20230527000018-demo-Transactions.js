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
					voucher_id: 2,
					amount: 1322100,
					created_at: "2023-05-24",
					voucher_discount: 40000,
					status_id: 5,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: 3,
					amount: 708000,
					created_at: "2023-05-30",
					voucher_discount: 20000,
					status_id: 5,
					address: "Jl. Empu Tantular No.1, Semarang Tengah, 50137",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 202500,
					created_at: "2023-06-02",
					voucher_discount: 0,
					status_id: 5,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 144600,
					created_at: "2023-06-03",
					voucher_discount: 0,
					status_id: 5,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 196900,
					created_at: "2023-06-05",
					voucher_discount: 0,
					status_id: 5,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 299000,
					created_at: "2023-05-30",
					voucher_discount: 0,
					status_id: 5,
					address: "Jl. Empu Tantular No.1, Semarang Tengah, 50137",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Transactions", null, {});
	},
};
