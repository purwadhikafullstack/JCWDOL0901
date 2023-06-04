"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Admins", {
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
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			super: {
				defaultValue: false,
				type: Sequelize.BOOLEAN,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Admins");
	},
};
