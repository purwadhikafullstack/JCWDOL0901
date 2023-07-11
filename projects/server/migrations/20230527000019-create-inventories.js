"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Inventories", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			product_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			branch_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			stock: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
		});
		// TODO: addConstraint 1 (from id to Inventory_promotions.inventory_id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1

		await queryInterface.dropTable("Inventories");
	},
};
