"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Statuses",
			[
				{
					name: "Menunggu Pembayaran",
				},
				{
					name: "Menunggu Konfirmasi Pembayaran",
				},
				{
					name: "Diproses",
				},
				{
					name: "Dikirim",
				},
				{
					name: "Dikonfirmasi",
				},
				{
					name: "Dibatalkan",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Statuses", null, {});
	},
};
