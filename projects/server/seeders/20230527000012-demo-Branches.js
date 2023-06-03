"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Branches",
			[
				{
					admin_id: 3,
					city_id: 399,
					name: "Groseria Store Semarang",
					latitude: -6.966667,
					longitude: 110.416664,
				},
				{
					admin_id: 2,
					city_id: 152,
					name: "Groseria Store Jakarta Pusat",
					latitude: -6.2,
					longitude: 106.816666,
				},
				{
					admin_id: 5,
					city_id: 23,
					name: "Groseria Store Bandung",
					latitude: -6.914744,
					longitude: 107.60981,
				},
				{
					admin_id: 4,
					city_id: 445,
					name: "Groseria Store Solo",
					latitude: -7.566667,
					longitude: 110.816667,
				},
				{
					admin_id: 6,
					city_id: 444,
					name: "Groseria Surabaya",
					latitude: -7.250445,
					longitude: 112.768845,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Branches", null, {});
	},
};
