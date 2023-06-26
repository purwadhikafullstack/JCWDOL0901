"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Transaction_details",
			[
				{
					transaction_id: 1,
					inventory_id: 47,
					name: "Striploin Meltique Ryou Pouch 200gr",
					quantity: 4,
					price: 258000,
					branch_discount: 0,
				},
				{
					transaction_id: 1,
					inventory_id: 71,
					name: "Adem Sari Ching Ku Sparkling Herbal Lemon 320ml",
					quantity: 1,
					price: 8300,
					branch_discount: 0,
				},
				{
					transaction_id: 1,
					inventory_id: 125,
					name: "SOS Hand Sanitizer Spray",
					quantity: 4,
					price: 72800,
					branch_discount: 0,
				},
				{
					transaction_id: 1,
					inventory_id: 95,
					name: "Gentle Hour Hydrating Toner DEW IT AGAIN 150ml",
					quantity: 5,
					price: 925000,
					branch_discount: 0,
				},
				{
					transaction_id: 2,
					inventory_id: 60,
					name: "Gary Malkist Saluut Cokelat Crackers 110gr",
					quantity: 5,
					price: 42000,
					branch_discount: 0,
				},
				{
					transaction_id: 2,
					inventory_id: 93,
					name: "Nutrilon Royal 4 Honey 800gr/Susu Anak 3-6 thn",
					quantity: 2,
					price: 384000,
					branch_discount: 0,
				},
				{
					transaction_id: 2,
					inventory_id: 13,
					name: "Le Minerale - Galon 15 L",
					quantity: 5,
					price: 110000,
					branch_discount: 0,
				},
				{
					transaction_id: 2,
					inventory_id: 30,
					name: "Paket Masak Capcay",
					quantity: 5,
					price: 134000,
					branch_discount: 0,
				},
				{
					transaction_id: 3,
					inventory_id: 14,
					name: "Arang Briket BBBQ 2,5kg",
					quantity: 3,
					price: 136200,
					branch_discount: 0,
				},
				{
					transaction_id: 3,
					inventory_id: 4,
					name: "Buah Naga Merah",
					quantity: 1,
					price: 28300,
					branch_discount: 0,
				},
				{
					transaction_id: 4,
					inventory_id: 135,
					name: "Lap Plas Chamois Aion/Lap Kanebo",
					quantity: 1,
					price: 62900,
					branch_discount: 0,
				},
				{
					transaction_id: 4,
					inventory_id: 32,
					name: "Paket Masak Sayur Asem",
					quantity: 1,
					price: 23700,
					branch_discount: 0,
				},
				{
					transaction_id: 5,
					inventory_id: 145,
					name: "Philips Lampu LED My Care 12w Putih - 1Pcs",
					quantity: 1,
					price: 75800,
					branch_discount: 0,
				},
				{
					transaction_id: 5,
					inventory_id: 134,
					name: "Mr Muscle Pembersih Kamar Mandi 5in1 Spray 500ml",
					quantity: 3,
					price: 63300,
					branch_discount: 0,
				},
				{
					transaction_id: 5,
					inventory_id: 82,
					name: "Sasa Santan Cair 200ml",
					quantity: 2,
					price: 19800,
					branch_discount: 0,
				},
				{
					transaction_id: 6,
					inventory_id: 88,
					name: "Zwitsal Aloe Vera Baby Bath Hair and Body 450ml",
					quantity: 1,
					price: 40800,
					branch_discount: 0,
				},
				{
					transaction_id: 6,
					inventory_id: 31,
					name: "Paket Masak Sapo Tahu",
					quantity: 3,
					price: 101400,
					branch_discount: 0,
				},
				{
					transaction_id: 6,
					inventory_id: 8,
					name: "Sariwangi Teh Melati isi 25",
					quantity: 2,
					price: 18800,
					branch_discount: 0,
				},
				{
					transaction_id: 6,
					inventory_id: 59,
					name: "Loacker Napolitaner 45gr/Wafer",
					quantity: 1,
					price: 16200,
					branch_discount: 0,
				},
				{
					transaction_id: 6,
					inventory_id: 90,
					name: "Cerelac Homestyle Bubur Tim Ayam Bayam 120gr",
					quantity: 3,
					price: 54000,
					branch_discount: 0,
				},
				{
					transaction_id: 6,
					inventory_id: 45,
					name: "Tempe Jumbo 500gr Daun",
					quantity: 2,
					price: 29800,
					branch_discount: 0,
				},
				{
					transaction_id: 7,
					inventory_id: 211,
					name: "Khong Guan Assorted Can 1600gr",
					quantity: 1,
					price: 100000,
					branch_discount: 16100,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Transaction_details", null, {});
	},
};
