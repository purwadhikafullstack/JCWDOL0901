"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Stock_changes", {
			inventory_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			stock_before: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			stock_after: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: Sequelize.DATE,
			},
		});

		// TODO: addConstraint 1 (from inventory_id to Inventories.id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint

		await queryInterface.dropTable("Stock_changes");
	},
};
