"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Vouchers",
			[
				{
					name: "[Referral Reward] Gratis Ongkir",
					description: "Gratis Ongkir hingga Rp 25.000, tanpa minimal belanja",
					value: 25000,
					start_at: "2023-05-25",
					expired_at: null,
					claim_limit: null,
					promotion_id: 1,
					min_spend: 500000,
					max_discount: null,
					inventory_id: null,
				},
				{
					name: "[Grand Opening] Diskon Belanja",
					description: "Diskon 25% hingga Rp 40.000, dengan minimal belanja Rp 100.000",
					value: 25,
					start_at: "2023-05-22",
					expired_at: "2023-05-23",
					claim_limit: 1,
					promotion_id: 3,
					min_spend: 100000,
					max_discount: 40000,
					inventory_id: null,
				},
				{
					name: "[Newcomer Reward] Diskon Belanja",
					description: "Diskon hingga Rp 20.000 tanpa minimal transaksi",
					value: 20000,
					start_at: "1971-01-01",
					expired_at: null,
					claim_limit: 1,
					promotion_id: 2,
					min_spend: 0,
					max_discount: null,
					inventory_id: null,
				},
				{
					name: "[Groseria Semarang] Diskon Belanja",
					description: "Diskon Omeheart Softgels 600mg hingga Rp 25.000 tanpa minimal transaksi",
					value: 25000,
					start_at: "1971-01-01",
					expired_at: null,
					claim_limit: 1,
					promotion_id: 2,
					min_spend: 0,
					max_discount: null,
					inventory_id: 115,
				},
				{
					name: "[Groseria Semarang] Diskon Belanja",
					description: "Diskon My Roti Roti Tawar Funwari hingga Rp 5.000 tanpa minimal transaksi",
					value: 5000,
					start_at: "1971-01-01",
					expired_at: null,
					claim_limit: 1,
					promotion_id: 2,
					min_spend: 0,
					max_discount: 5000,
					inventory_id: 7,
<<<<<<< HEAD
=======
				},
				{
					name: "[Groseria Semarang] Gratis Ongkir dengan minimal belanja Rp 500.000",
					description: "Gratis Ongkir hingga Rp 100.000",
					value: 100000,
					start_at: "2023-05-25",
					expired_at: null,
					claim_limit: 1,
					promotion_id: 1,
					min_spend: 500000,
					max_discount: null,
					inventory_id: null,
>>>>>>> development
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Vouchers", null, {});
	},
};
