"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Carts", {
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			inventory_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});

		// TODO: addConstraint 1 (from Users.id to user_id);
		// TODO: addConstraint 2 (from Inventories.id to inventory_id);
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1
		// TODO: dropConstraint 2

		await queryInterface.dropTable("Carts");
	},
};
