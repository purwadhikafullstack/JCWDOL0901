"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING,
			},
			phone: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			username: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING,
			},
			referral_code: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.STRING,
			},
			referrer: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.STRING,
			},
			verified: {
				defaultValue: false,
				type: Sequelize.BOOLEAN,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Users");
	},
};
