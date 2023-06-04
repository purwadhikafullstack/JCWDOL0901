"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Categories", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING,
			},
		});

		// TODO: addConstraint 1 (from id to Products.category_id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1

		await queryInterface.dropTable("Categories");
	},
};
