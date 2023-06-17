const cron = require("node-cron");
const { Inventory_promotions } = require("../models/index.js");
const { Op } = require("sequelize");

const deleteExpiredPromotion = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			await Inventory_promotions.destroy({
				where: {
					expired_at: { [Op.lte]: new Date() },
				},
			});

			return await resolve("deleteExpiredPromotion task succeeded");
		} catch (error) {
			return await reject("deleteExpiredPromotion task failed");
		}
	});
};

const midnightTask = cron.schedule(
	"0 0 * * *",
	async () => {
		await deleteExpiredPromotion()
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(`Scheduler error: ${error}`);
			});
	},
	{ scheduled: true, timezone: "Asia/Bangkok" },
);

module.exports = { midnightTask };
