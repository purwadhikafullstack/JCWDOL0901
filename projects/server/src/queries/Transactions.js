const {
	Transactions,
	Transaction_details,
	Inventories,
	Products,
} = require("../models/index.js");
const { Op } = require("sequelize");

const readAdminTransasctionsQuery = async (from, to, status, branch) => {
	const dateQueryHelper = {
		created_at: {
			[Op.gte]: from ? new Date(from) : new Date(0),
			[Op.lte]: to ? new Date(to) : new Date(),
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

module.exports = { readAdminTransasctionsQuery };
