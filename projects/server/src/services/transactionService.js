const { sequelize } = require("../models/index.js");

module.exports = {
	startCreateTransaction: async (user_id, payload) => {
		return new Promise(async (resolve, reject) => {
			const transaction = sequelize.transaction();
			try {
				const Transaction = await createUserTransaction(user_id, payload, transaction);
			} catch (error) {}
		});
	},
};
