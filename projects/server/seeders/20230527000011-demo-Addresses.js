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
					label: "Rumah (utama)",
					address: "Jl. Gang Lombok no. 14, Semarang Tengah, 50188",
					latitude: -6.973867860991175,
					longtitude: 110.42577549626587,
					default: true,
				},
				{
					user_id: 1,
					city_id: 399,
					label: "Warung",
					address: "Jl. Empu Tantular No.1, Semarang Tengah, 50137",
					latitude: -6.970715842286184,
					longtitude: 110.42576355368963,
					default: false,
				},
				{
					user_id: 3,
					city_id: 399,
					label: "Omah",
					address: "Jl. Semarang Indah No.2, Semarang Barat, 50144",
					latitude: -6.969610927226034,
					longtitude: 110.3945889516456,
					default: true,
				},
				{
					user_id: 4,
					city_id: 152,
					label: "Apartemen",
					address:
						"Jl. Medan Merdeka Sel. No.11, RT.11/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110",
					latitude: -6.181277772102812,
					longtitude: 106.82691787141256,
					default: true,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Addresses", null, {});
	},
};
