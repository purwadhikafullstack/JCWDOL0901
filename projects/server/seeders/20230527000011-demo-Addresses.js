"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Addresses",
			[
				{
					user_id: 1,
					city_id: 399,
					label: "Rumah (Semarang)",
					detail: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
					latitude: -6.973867860991175,
					longitude: 110.42577549626587,
					is_default: true,
				},
				{
					user_id: 1,
					city_id: 399,
					label: "Warung",
					detail: "Jl. Empu Tantular No.1, Semarang Tengah, 50137",
					latitude: -6.970715842286184,
					longitude: 110.42576355368963,
					is_default: false,
				},
				{
					user_id: 3,
					city_id: 399,
					label: "Omah",
					detail: "Jl. Semarang Indah No.2, Semarang Barat, 50144",
					latitude: -6.969610927226034,
					longitude: 110.3945889516456,
					is_default: true,
				},
				{
					user_id: 4,
					city_id: 152,
					label: "Apartemen",
					detail: "Jl. Medan Merdeka Sel. No.11, RT.11/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110",
					latitude: -6.181277772102812,
					longitude: 106.82691787141256,
					is_default: true,
				},
				{
					user_id: 1,
					city_id: 23,
					label: "Rumah (Bandung)",
					detail: "Jl. ABC 54-44, Braga, 40111",
					latitude: -6.918882842175393,
					longitude: 107.60618754038646,
					is_default: false,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Addresses", null, {});
	},
};
