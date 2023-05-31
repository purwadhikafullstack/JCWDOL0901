"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Vouchers", {
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			value: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			start_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			expired_at: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.DATE,
			},
			use_limit: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			promotion_id: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
			min_spend: {
				defaultValue: 0,
				type: Sequelize.INTEGER,
			},
			max_discount: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
			inventory_id: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
			branch_id: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Vouchers");
	},
};
