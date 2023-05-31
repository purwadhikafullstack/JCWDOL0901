"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					image: "/products/sayur_bayamhidroponik.jpg",
					name: "Hydrophonic - Bayam",
					price: 25000,
					description: "Bayam hidroponik organik",
					weight: 400,
					unit: "gram",
					category_id: 5,
					active: true,
				},
				{
					image: "/products/buah_nanasmadu.jpg",
					name: "Nanas Madu",
					price: 12000,
					description: "Kupas dengan plastic wrapper",
					weight: 250,
					unit: "gram",
					category_id: 4,
					active: true,
				},
				{
					image: "/products/mieinstan_indomiegorengbox.jpg",
					name: "Indomie Goreng 40pcs",
					price: 110000,
					description: "Box berisi 40, satuan: 38gram",
					weight: 2000,
					unit: "gram",
					category_id: 3,
					active: true,
				},
				{
					image: "/products/snack_pringles.jpg",
					name: "Pringles Keju (25% Bonus)",
					price: 26000,
					description: "Pringles keju edisi bonus isi 25%",
					weight: 200,
					unit: "gram",
					category_id: 1,
					active: true,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", null, {});
	},
};
