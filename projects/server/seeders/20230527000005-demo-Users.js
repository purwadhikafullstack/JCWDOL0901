"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					email: "verified@mail.com",
					phone: "0810000001",
					password: "verified",
					username: "shania",
					verified: true,
					referral_code: "SHA-000001",
					referrer: null,
				},
				{
					email: "unverified@mail.com",
					phone: "0810000002",
					password: "unverified",
					username: "jdoe",
					verified: false,
					referral_code: "JDO-000002",
					referrer: null,
				},
				{
					email: "gumigameciel@gmail.com",
					phone: "0810000003",
					password: "gumigameciel",
					username: "chris",
					verified: false,
					referral_code: "CHR-000003",
					referrer: 1,
				},
				{
					email: "demo@mail.com",
					phone: "0810000004",
					password: "demouser",
					username: "demouser",
					verified: true,
					referral_code: "DEM-000004",
					referrer: null,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
