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
				{
					user_id: 4,
					gender: "M",
					name: "Demo",
					birth: "1979-12-12",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 5,
					gender: "M",
					name: "Gepard",
					birth: "1988-05-28",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 6,
					gender: "F",
					name: "Mary nara",
					birth: "1999-10-12",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 7,
					gender: "M",
					name: "Sanji Pratama",
					birth: "1997-06-05",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 8,
					gender: "F",
					name: "Andrea Lenny",
					birth: "1998-01-05",
					avatar: "/avatars/default.jpg",
				},
				{
					user_id: 9,
					gender: "M",
					name: "Budi Harto",
					birth: "1978-08-03",
					avatar: "/avatars/default.jpg",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Profiles", null, {});
	},
};
