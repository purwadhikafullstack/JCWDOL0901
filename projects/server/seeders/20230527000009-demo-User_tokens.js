"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"User_tokens",
			[
				{
					user_id: 2,
					token:
						"a5aa8216ae5f23c2e788612a09aebf383f867d6ad47e92bcf2d0946c8b0dd39a",
					action: "verify_account",
				},
				{
					user_id: 3,
					token:
						"8b2cb0189a2ce4a18f594723ec99c1aad3b372ba72adf66bae3d8e8134497b66",
					action: "verify_account",
				},
				{
					user_id: 1,
					token:
						"a5aa8216ae5f23c2e788612a023ec99c1aad3b372ba92bcf2d0946c8b0dd39b",
					action: "forget_password",
				},
				{
					user_id: 4,
					token:
						"a5aa8216ae5f23c2e788612a023ec99c1aad3b372ba92bcf2d0946c8b0dd39b",
					action: "change_email",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("User_tokens", null, {});
	},
};
