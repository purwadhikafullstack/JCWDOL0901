"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Admins",
			[
				{
					email: "super@groseria.com",
					password: "supergroseria",
					super: true,
				},
				{
					email: "groseriastore.jakpus@groseria.com",
					password: "jakarta",
					super: false,
				},
				{
					email: "groseriastore.smg@groseria.com",
					password: "semarang",
					super: false,
				},
				{
					email: "groseriastore.solo@groseria.com",
					password: "surakarta",
					super: false,
				},
				{
					email: "groseriastore.bdg@groseria.com",
					password: "bandung",
					super: false,
				},
				{
					email: "groseriastore.sby@groseria.com",
					password: "surabaya",
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
