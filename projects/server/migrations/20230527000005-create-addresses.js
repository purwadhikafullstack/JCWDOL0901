"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Addresses", {
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: false,
				unique: false,
				type: Sequelize.INTEGER,
			},
			city_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			label: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			detail: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			latitude: {
				allowNull: false,
				type: Sequelize.DECIMAL(11, 8),
			},
			longitude: {
				allowNull: false,
				type: Sequelize.DECIMAL(11, 8),
			},
			is_default: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
		});
		// TODO: addConstraint 1 (from city_id to Cities.id);
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1
		await queryInterface.dropTable("Addresses");
	},
};
