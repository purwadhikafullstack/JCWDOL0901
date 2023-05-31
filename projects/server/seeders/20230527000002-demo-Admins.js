"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Admins",
			[
				{
					email: "super@ogwa.com",
					password: "superogwa",
					super: true,
				},
				{
					email: "branch1@ogwa.com",
					password: "branch1ogwa",
					super: false,
				},
				{
					email: "branch2@ogwa.com",
					password: "branch2ogwa",
					super: false,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Admins", null, {});
	},
};
