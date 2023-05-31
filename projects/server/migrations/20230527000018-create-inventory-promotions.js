"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Inventory_promotions", {
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			inventory_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			value: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			start_at: {
				allowNull: false,
				type: Sequelize.DATEONLY,
			},
			expired_at: {
				allowNull: false,
				type: Sequelize.DATEONLY,
			},
			promotion_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});

		// TODO: addConstraint 1 (from inventory_id to Promotions.id);
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1

		await queryInterface.dropTable("Inventory_promotions");
	},
};
