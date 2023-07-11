"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Transactions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			branch_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			voucher_id: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.INTEGER,
			},
			amount: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			voucher_discount: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			status_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			address: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: Sequelize.DATE,
			},
		});

		// TODO: addConstraint 1 (from Users.id to user_id)
		// TODO: addConstraint 2 (from Branches.id to branch_id)
		// TODO: addConstraint 3 (from Branches.id to branch_id)
	},
	async down(queryInterface, Sequelize) {
		// TODO: dropConstraint 1
		// TODO: dropConstraint 2
		// TODO: dropConstraint 3

		await queryInterface.dropTable("Transactions");
	},
};
