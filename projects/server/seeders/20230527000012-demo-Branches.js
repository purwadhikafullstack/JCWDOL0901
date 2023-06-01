"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Branches",
			[
				{
					admin_id: 3,
					city_id: 3,
					name: "OGWA Store Semarang",
					latitude: -6.966667,
					longtitude: 110.416664,
				},
				{
					admin_id: 2,
					city_id: 1,
					name: "OGWA Store Jakarta",
					latitude: -6.2,
					longtitude: 106.816666,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Branches", null, {});
	},
};
