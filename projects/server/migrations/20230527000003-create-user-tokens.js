"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("User_tokens", {
			id: {
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			token: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			action: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: Sequelize.DATE,
			},
		});
		// TODO: addConstraint 1 (from user_id to Users.id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1
		await queryInterface.dropTable("User_tokens");
	},
};
