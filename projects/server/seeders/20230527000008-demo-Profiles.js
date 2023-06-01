"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Profiles",
			[
				{
					user_id: 1,
					gender: "F",
					name: "Shania",
					birth: "1999-07-15",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 2,
					gender: "M",
					name: "John Doe",
					birth: "1997-03-26",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 3,
					gender: "M",
					name: "Chris",
					birth: "1999-10-30",
					avatar: "/avatars/default.jpg",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Profiles", null, {});
	},
};
