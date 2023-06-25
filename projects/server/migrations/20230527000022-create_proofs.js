"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Proofs", {
			transaction_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		queryInterface.dropTable("Proofs");
	},
};
