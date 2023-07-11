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
				{
					email: "pelanggan.smg@mail.com",
					phone: "0810000005",
					password: "pelanggansmg",
					username: "penggunasmg",
					verified: true,
					referral_code: "PEN-000005",
					referrer: 1,
				},
				{
					email: "mary.nara@mail.com",
					phone: "0810000006",
					password: "marynara",
					username: "marynara",
					verified: true,
					referral_code: "MAR-000006",
					referrer: 5,
				},
				{
					email: "san.san@mail.com",
					phone: "0810000007",
					password: "sansansan",
					username: "sansansan",
					verified: true,
					referral_code: "SAN-000007",
					referrer: 5,
				},
				{
					email: "andrea.lenny@mail.com",
					phone: "0810000008",
					password: "andrealenny",
					username: "andrealenny",
					verified: true,
					referral_code: "AND-000008",
					referrer: 6,
				},
				{
					email: "budi.harto@mail.com",
					phone: "0810000009",
					password: "budiharto",
					username: "budiharto",
					verified: true,
					referral_code: "BUD-000009",
					referrer: 6,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
