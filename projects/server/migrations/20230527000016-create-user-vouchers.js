"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("User_vouchers", {
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			voucher_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			quota: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("User_vouchers");
	},
};
