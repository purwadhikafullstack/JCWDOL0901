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
	Inventory_promotions,
	Promotions,
	Logistics,
} = require("../models/index.js");

const { Op, literal, Transaction } = require("sequelize");

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
const readBranchAdminTransactionDetailQuery = async (branch_id, id) => {
	return await Transactions.findOne({
		where: { id, branch_id },
		include: [
			{ model: Transaction_details, include: { model: Inventory_promotions, include: Promotions } },
			{ model: Logistics },
			{ model: Branches },
		],
	});
};

const createTransactionQuery = async (payload, transaction) => {
	return await Transactions.create({ ...payload, status_id: 1 }, { transaction });
};

const readUserTransactionQuery = async (transaction_id) => {
	return await Transactions.findOne({
		where: { id: transaction_id },
		include: [
			{ model: Transaction_details, include: { model: Inventory_promotions, include: Promotions } },
			{ model: Logistics },
			{ model: Branches },
		],
	});
};

const updateTransactionStatusQuery = async (status_id, transaction_id, transaction) => {
	return await Transactions.update(
		{ status_id, updated_at: new Date() },
		{ where: { id: transaction_id }, transaction },
	);
};

const readUserTransactionsQuery = async (user_id) => {
	return await Transactions.findAndCountAll({
		where: { user_id },
		include: { model: Transaction_details, include: { model: Inventories, include: Products } },
		distinct: true,
		order: [["updated_at", "DESC"]],
	});
};

module.exports = {
	readAdminTransactionsQuery,
	readBranchAdminTransactionsQuery,
	createTransactionQuery,
	readUserTransactionQuery,
	updateTransactionStatusQuery,
	readUserTransactionsQuery,
	readBranchAdminTransactionDetailQuery,
};
