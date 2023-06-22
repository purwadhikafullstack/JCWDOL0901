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
					created_at: "2023-05-24 20:01:45",
					updated_at: "2023-05-24 20:01:45",
					voucher_discount: 40000,
					status_id: 5,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: 3,
					amount: 708000,
					created_at: "2023-05-30 22:21:55",
					updated_at: "2023-05-30 22:21:55",
					voucher_discount: 20000,
					status_id: 4,
					address: "Jl. Empu Tantular No.1, Semarang Tengah, 50137",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 202500,
					created_at: "2023-06-02 13:41:13",
					updated_at: "2023-06-02 13:41:13",
					voucher_discount: 0,
					status_id: 3,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 144600,
					created_at: "2023-06-03 08:12:20",
					updated_at: "2023-06-03 08:12:20",
					voucher_discount: 0,
					status_id: 2,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 196900,
					created_at: "2023-06-05 10:42:52",
					updated_at: "2023-06-05 10:42:52",
					voucher_discount: 0,
					status_id: 6,
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
				},
				{
					user_id: 1,
					branch_id: 1,
					voucher_id: null,
					amount: 299000,
					created_at: "2023-06-10 11:13:06",
					updated_at: "2023-06-10 11:13:00",
					voucher_discount: 0,
					status_id: 1,
					address: "Jl. Empu Tantular No.1, Semarang Tengah, 50137",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Transactions", null, {});
	},
};
