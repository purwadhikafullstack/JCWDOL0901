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
					password: "$2b$10$Fj9iJNL8HZIU3Mt3afZFjeIzsHK0HHzBHMK3nhN/tDIjxbYtqKzu2",
					username: "shania",
					verified: true,
					referral_code: "SHA-000001",
					referrer: null,
				},
				{
					email: "unverified@mail.com",
					phone: "0810000002",
					password: "$2b$10$wtY/IHpyn413cslanLyjy.1ftuHz1NOd9ITjpE.Cjz5SfrGt23dMu",
					username: "jdoe",
					verified: false,
					referral_code: "JDO-000002",
					referrer: null,
				},
				{
					email: "gumigameciel@gmail.com",
					phone: "0810000003",
					password: "$2b$10$DAyUxXopRerD0AOw4i8bJuArApAqNYkTOBDZYkUSEoR/GPUzpb51m",
					username: "chris",
					verified: false,
					referral_code: "CHR-000003",
					referrer: 1,
				},
				{
					email: "demouser@mail.com",
					phone: "0810000004",
					password: "$2b$10$PJQeXipsS7G1DDq/uaYS3.SWuLEfLueKJ0DJVXspFEchNxDCyqA2m",
					username: "demouser",
					verified: true,
					referral_code: "DEM-000004",
					referrer: null,
				},
				{
					email: "pelanggan.smg@mail.com",
					phone: "0810000005",
					password: "$2b$10$y.f3vUzYhdjZg7i4UB2fYuNTjyOgD66iXRZazODGOkpApOENmeYw.",
					username: "penggunasmg",
					verified: true,
					referral_code: "PEN-000005",
					referrer: 1,
				},
				{
					email: "mary.nara@mail.com",
					phone: "0810000006",
					password: "$2b$10$uBZfSDHalz8hit4yAT0/Fe0I/3h8cl92RAB7qMzXbECUBi6KMOD9i",
					username: "marynara",
					verified: true,
					referral_code: "MAR-000006",
					referrer: 5,
				},
				{
					email: "sansansan@mail.com",
					phone: "0810000007",
					password: "$2b$10$JA5sCcFO91v2UAKFwGgjRuAdof2DEPECCY9AagGGSFj2RePvzO01K",
					username: "sansansan",
					verified: true,
					referral_code: "SAN-000007",
					referrer: 5,
				},
				{
					email: "andrea.lenny@mail.com",
					phone: "0810000008",
					password: "$2b$10$9l4pGzDbXqpot51K0p5WQO1vIyfMk6Kz8mODG6tTDg5hRF1SGBByW",
					username: "andrealenny",
					verified: true,
					referral_code: "AND-000008",
					referrer: 6,
				},
				{
					email: "budi.harto@mail.com",
					phone: "0810000009",
					password: "$2b$10$hL2BxoxDgmmplNfi1eBQAe4W/gA/jBTa7jH0enFzjGsTkWq7K5a72",
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
