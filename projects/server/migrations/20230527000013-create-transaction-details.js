"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Transaction_details", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			transaction_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			inventory_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			inventory_promotion_id: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			price: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			branch_discount: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Transaction_details");
	},
};
