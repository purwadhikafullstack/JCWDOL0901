"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"User_vouchers",
			[
				{
					user_id: 1,
					voucher_id: 1,
					isUsed: false,
				},
				{
					user_id: 1,
					voucher_id: 2,
					isUsed: false,
				},
				{
					user_id: 1,
					voucher_id: 3,
					isUsed: false,
				},
				{
					user_id: 1,
					voucher_id: 4,
					isUsed: false,
				},
				{
					user_id: 1,
					voucher_id: 5,
					isUsed: false,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("User_vouchers", null, {});
	},
};
