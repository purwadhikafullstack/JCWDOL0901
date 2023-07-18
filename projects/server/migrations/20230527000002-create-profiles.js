"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Profiles", {
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			gender: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.STRING,
			},
			birth: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.DATEONLY,
			},
			avatar: {
				defaultValue: "uploads/avatars/default.png",
				type: Sequelize.STRING,
			},
		});

		// TODO: addConstraint 1 (from user_id to Users.id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1
		await queryInterface.dropTable("Profiles");
	},
};
