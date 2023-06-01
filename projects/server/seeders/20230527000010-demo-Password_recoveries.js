"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Password_recoveries",
			[
				{
					user_id: 1,
					token:
						"a5aa8216ae5f23c2e788612a023ec99c1aad3b372ba92bcf2d0946c8b0dd39b",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Password_recoveries", null, {});
	},
};
