"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Categories",
			[
				{
					id: 1,
					name: "Sayur & Buah",
					image: "uploads/category/category_1.png",
				},
				{
					id: 2,
					name: "Sarapan",
					image: "uploads/category/category_2.png",
				},
				{
					id: 3,
					name: "Kebutuhan Pokok",
					image: "uploads/category/category_3.png",
				},
				{
					id: 4,
					name: "Susu & Olahan Susu",
					image: "uploads/category/category_4.png",
				},
				{
					id: 5,
					name: "Paket Masak",
					image: "uploads/category/category_5.png",
				},
				{
					id: 6,
					name: "Makanan Beku",
					image: "uploads/category/category_6.png",
				},
				{
					id: 7,
					name: "Protein",
					image: "uploads/category/category_7.png",
				},
				{
					id: 8,
					name: "Daging Beku",
					image: "uploads/category/category_8.png",
				},
				{
					id: 9,
					name: "Snack",
					image: "uploads/category/category_9.png",
				},
				{
					id: 10,
					name: "Biskuit",
					image: "uploads/category/category_10.png",
				},
				{
					id: 11,
					name: "Es Krim",
					image: "uploads/category/category_11.png",
				},
				{
					id: 12,
					name: "Minuman",
					image: "uploads/category/category_12.png",
				},
				{
					id: 13,
					name: "Tepung & Bahan Kue",
					image: "uploads/category/category_13.png",
				},
				{
					id: 14,
					name: "Bahan Masak & Bumbu",
					image: "uploads/category/category_14.png",
				},
				{
					id: 15,
					name: "Ibu & Bayi",
					image: "uploads/category/category_15.png",
				},
				{
					id: 16,
					name: "Kecantikan",
					image: "uploads/category/category_16.png",
				},
				{
					id: 17,
					name: "Kebersihan Diri",
					image: "uploads/category/category_17.png",
				},
				{
					id: 18,
					name: "Perawatan Diri",
					image: "uploads/category/category_18.png",
				},
				{
					id: 19,
					name: "Vitamin",
					image: "uploads/category/category_19.png",
				},
				{
					id: 20,
					name: "Obat-obatan",
					image: "uploads/category/category_20.png",
				},
				{
					id: 21,
					name: "Alat Kesehatan",
					image: "uploads/category/category_21.png",
				},
				{
					id: 22,
					name: "Perawatan Rumah",
					image: "uploads/category/category_22.png",
				},
				{
					id: 23,
					name: "Perlengkapan Hewan",
					image: "uploads/category/category_23.png",
				},
				{
					id: 24,
					name: "Elektronik",
					image: "uploads/category/category_24.png",
				},
				{
					id: 25,
					name: "Gas & Air Galon",
					image: "uploads/category/category_25.png",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Categories", null, {});
	},
};
