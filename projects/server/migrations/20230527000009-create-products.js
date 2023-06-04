"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			price: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			weight: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			unit: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			category_id: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
			active: {
				defaultValue: true,
				type: Sequelize.BOOLEAN,
			},
		});
		// TODO: addConstraint 1 (from id to Inventories.product_id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1

		await queryInterface.dropTable("Products");
	},
};
