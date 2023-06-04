"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("User_vouchers", {
			id: {
				autoIncrement: true,
				unique: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			voucher_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			isUsed: {
				defaultValue: false,
				type: Sequelize.BOOLEAN,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("User_vouchers");
	},
};
