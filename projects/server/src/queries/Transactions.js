const { Transactions, Transaction_details, Inventories, Products } = require("../models/index.js");
const { Op } = require("sequelize");

const dateQueryHelper = (from, to) => {
	return {
		created_at: {
			[Op.gte]: from,
			[Op.lte]: to,
		},
	};
};

const statusQueryHelper = status =>
	status
		? {
				status_id: status,
		  }
		: {};

const branchQueryHelper = branch =>
	branch
		? {
				branch_id: branch,
		  }
		: {};

const readAdminTransactionsQuery = async (from, to, status, branch) => {
	return await Transactions.findAll({
		where: {
			...dateQueryHelper(from, to),
			...statusQueryHelper(status),
			...branchQueryHelper(branch),
		},
		// include: {
		// 	model: Transaction_details,
		// 	include: { model: Inventories, include: Products },
		// },
	});
};

module.exports = { readAdminTransactionsQuery };
