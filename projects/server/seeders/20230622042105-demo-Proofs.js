"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Proofs",
			[
				{
					transaction_id: 1,
					image: "uploads/proof/proof.jpg",
				},
				{
					transaction_id: 2,
					image: "uploads/proof/proof.jpg",
				},
				{
					transaction_id: 3,
					image: "uploads/proof/proof.jpg",
				},
				{
					transaction_id: 4,
					image: "uploads/proof/proof.jpg",
				},
				{
					transaction_id: 5,
					image: "uploads/proof/proof.jpg",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Proofs", null, {});
	},
};
