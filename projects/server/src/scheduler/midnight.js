const cron = require("node-cron");
const { Inventory_promotions } = require("../models/index.js");
const { Op } = require("sequelize");

const deleteExpiredPromotion = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			await Inventory_promotions.update(
				{ isActive: false },
				{
					where: {
						expired_at: { [Op.lte]: new Date() },
					},
				},
			);
<<<<<<< HEAD

=======
>>>>>>> development
			return await resolve("deleteExpiredPromotion task succeeded");
		} catch (error) {
			return await reject("deleteExpiredPromotion task failed");
		}
	});
};

const midnightTask = cron.schedule(
	"0 0 * * *",
	async () => {
		console.log("[Scheduler] midnightTask started.");

		await deleteExpiredPromotion()
			.then((result) => {
				console.log(`[Notice] midnightTask: ${result}`);
			})
			.catch((error) => {
				console.log(`[Notice] midnightTask: ${error}`);
			});

		console.log("[Scheduler] midnightTask completed.");
	},
	{ scheduled: true, timezone: "Asia/Bangkok" },
);

<<<<<<< HEAD
module.exports = { midnightTask };
=======
module.exports = { midnightTask };
>>>>>>> development
