const {
	Transactions,
	Transaction_details,
	Inventories,
	Products,
} = require("../models/index.js");
const { Op } = require("sequelize");

const readAdminTransactionsQuery = async (from, to, status, branch) => {
	const dateQueryHelper = {
		created_at: {
			[Op.gte]: from,
			[Op.lte]: to,
		},
	};
	const statusQueryHelper = status
		? {
				status_id: status,
		  }
		: {};

	const branchQueryHelper = branch
		? {
				branch_id: branch,
		  }
		: {};

	return await Transactions.findAll({
		where: {
			...dateQueryHelper,
			...statusQueryHelper,
			...branchQueryHelper,
		},
		// include: {
		// 	model: Transaction_details,
		// 	include: { model: Inventories, include: Products },
		// },
	});
};

module.exports = { readAdminTransactionsQuery };
