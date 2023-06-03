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
					image: "/public/images/categories/sayur_buah.png",
				},
				{
					id: 2,
					name: "Sarapan",
					image: "/public/images/categories/sarapan.png",
				},
				{
					id: 3,
					name: "Gas & Air Galon",
					image: "/public/images/categories/gas_air.png",
				},
				{
					id: 4,
					name: "Kebutuhan Pokok",
					image: "/public/images/categories/kebutuhan_pokok.png",
				},
				{
					id: 5,
					name: "Susu & Olahan Susu",
					image: "/public/images/categories/susu.png",
				},
				{
					id: 6,
					name: "Paket Masak",
					image: "/public/images/categories/paket_masak.png",
				},
				{
					id: 7,
					name: "Makanan Beku",
					image: "/public/images/categories/makanan_beku.png",
				},
				{
					id: 8,
					name: "Protein",
					image: "/public/images/categories/protein.png",
				},
				{
					id: 9,
					name: "Daging Beku",
					image: "/public/images/categories/daging_beku.png",
				},
				{
					id: 10,
					name: "Snack",
					image: "/public/images/categories/snack.png",
				},
				{
					id: 11,
					name: "Biskuit",
					image: "/public/images/categories/biskuit.png",
				},
				{
					id: 12,
					name: "Es Krim",
					image: "/public/images/categories/es_krim.png",
				},
				{
					id: 13,
					name: "Minuman",
					image: "/public/images/categories/minuman.png",
				},
				{
					id: 14,
					name: "Tepung & Bahan Kue",
					image: "/public/images/categories/tepung_dan_bahan_kue.png",
				},
				{
					id: 15,
					name: "Bahan Masak & Bumbu",
					image: "/public/images/categories/bahan_masak_dan_bumbu.png",
				},
				{
					id: 16,
					name: "Ibu & Bayi",
					image: "/public/images/categories/ibu_dan_bayi.png",
				},
				{
					id: 17,
					name: "Kecantikan",
					image: "/public/images/categories/kecantikan.png",
				},
				{
					id: 18,
					name: "Kebersihan Diri",
					image: "/public/images/categories/kebersihan_diri.png",
				},
				{
					id: 19,
					name: "Perawatan Diri",
					image: "/public/images/categories/perawatan_diri.png",
				},
				{
					id: 20,
					name: "Vitamin",
					image: "/public/images/categories/vitamin.png",
				},
				{
					id: 21,
					name: "Obat-obatan",
					image: "/public/images/categories/obat_obatan.png",
				},
				{
					id: 22,
					name: "Alat Kesehatan",
					image: "/public/images/categories/alat_kesehatan.png",
				},
				{
					id: 23,
					name: "Perawatan Rumah",
					image: "/public/images/categories/perawatan_rumah.png",
				},
				{
					id: 24,
					name: "Perlengkapan Hewan",
					image: "/public/images/categories/perlengkapan_hewan.png",
				},
				{
					id: 25,
					name: "Elektronik",
					image: "/public/images/categories/elektronik.png",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Categories", null, {});
	},
};
