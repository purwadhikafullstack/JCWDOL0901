const {
	Transactions,
	Transaction_details,
	Inventories,
	Products,
	Statuses,
	Branches,
	Users,
	Profiles,
	Proofs,
} = require("../models/index.js");
const { Op, literal } = require("sequelize");

const dateQueryHelper = (from, to) => {
	return {
		updated_at: {
			[Op.gte]: from,
			[Op.lte]: to,
		},
	};
};

const statusQueryHelper = (status) =>
	status
		? {
				status_id: status,
		  }
		: {};

const branchQueryHelper = (branch) =>
	branch
		? {
				branch_id: branch,
		  }
		: {};

const readAdminTransactionsQuery = async (from, to, status, branch) => {
	return await Transactions.findAll({
		attributes: [
			"id",
			"user_id",
			"branch_id",
			"voucher_id",
			"amount",
			"voucher_discount",
			"status_id",
			"address",
			"created_at",
			"updated_at",
		],
		where: {
			...dateQueryHelper(from, to),
			...statusQueryHelper(status),
			...branchQueryHelper(branch),
		},
		include: {
			model: Transaction_details,
			// include: { model: Inventories, include: Products },
		},
	});
};

const readBranchAdminTransactionsQuery = async (query, branch) => {
	return await Transactions.findAndCountAll({
		where: {
			...query.filter?.Transactions,
			...branchQueryHelper(branch),
		},
		include: [
			{ model: Users },
			{ model: Statuses },
			{ model: Branches },
			{ model: Proofs },
			{
				model: Transaction_details,
			},
		],
		order: [...query.order?.Transactions, ["id", "DESC"]],
		distinct: true,
		offset: (query.page - 1) * 5,
		limit: 5,
	});
};

module.exports = { readAdminTransactionsQuery, readBranchAdminTransactionsQuery };
