"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Branches", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			admin_id: {
				unique: true,
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			city_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			latitude: {
				allowNull: false,
				type: Sequelize.DECIMAL(11, 8),
			},
			longtitude: {
				allowNull: false,
				type: Sequelize.DECIMAL(11, 8),
			},
		});

		// TODO: addConstraint 1 (from id to Inventories.branch_id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1
		await queryInterface.dropTable("Branches");
	},
};
