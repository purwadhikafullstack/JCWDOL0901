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
					avatar: "/assets/avatars/default.png",
				},
				{
					user_id: 2,
					gender: "M",
					name: "John Doe",
					birth: "1997-03-26",
					avatar: "/assets/avatars/default.png",
				},
				{
					user_id: 3,
					gender: "M",
					name: "Chris",
					birth: "1999-10-30",
					avatar: "/assets/avatars/default.png",
				},
				{
					user_id: 4,
					gender: "M",
					name: "Demo",
					birth: "1979-12-12",
					avatar: "/assets/avatars/default.png",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Profiles", null, {});
	},
};
