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
					quota: 1,
				},
				{
					user_id: 1,
					voucher_id: 2,
					quota: 1,
				},
				{
					user_id: 1,
					voucher_id: 3,
					quota: 1,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("User_vouchers", null, {});
	},
};
