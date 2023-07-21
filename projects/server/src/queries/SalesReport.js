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

const sequelize = require("sequelize");
const { Op, literal, Transaction } = require("sequelize");

const dateQueryHelper = (from, to) => {
	return {
		updated_at: {
			[Op.gte]: from,
			[Op.lte]: to,
		},
	};
};

const branchQueryHelper = (branch_id) =>
	branch_id
		? {
				branch_id,
		  }
		: {};

const readProductSalesReportQuery = async (branch_id, from, to, page, item_per_page, sort, order) => {
	// const where = branch_id == 0 ? { status_id: 5 } : { status_id: 5, branch_id };
	const result = await Transaction_details.findAndCountAll({
		attributes: ["name", [sequelize.fn("SUM", sequelize.col("quantity")), "qty"]],
		include: [
			{
				model: Transactions,
				where: {
					status_id: 5,
					...dateQueryHelper(from, to),
					...branchQueryHelper(branch_id),
				},
				attributes: [],
				required: true,
			},
		],
		group: ["name"],
		order: sort && order ? [[sequelize.literal(sort), order == 1 ? "ASC" : "DESC"]] : [],
		offset: (page - 1) * Number(item_per_page),
		limit: Number(item_per_page),
	});

	return result;
};

const readTransactionSalesReportQuery = async (branch_id, from, to, page, item_per_page, sort, order) => {
	const result = await Transactions.findAndCountAll({
		attributes: ["amount", "updated_at"],
		where: {
			status_id: 5,
			...dateQueryHelper(from, to),
			...branchQueryHelper(branch_id),
		},
		order: sort && order ? [[sequelize.literal(sort), order == 1 ? "ASC" : "DESC"]] : [],
		offset: (page - 1) * Number(item_per_page),
		limit: Number(item_per_page),
	});

	return result;
};

const readUserSalesReportQuery = async (branch_id, from, to, page, item_per_page, sort, order) => {
	const result = await Transactions.findAndCountAll({
		attributes: ["user_id", [sequelize.fn("SUM", sequelize.col("amount")), "total_spending"]],
		where: {
			status_id: 5,
			...dateQueryHelper(from, to),
			...branchQueryHelper(branch_id),
		},
		include: [
			{
				model: Users,
				attributes: ["username", "email"],
				required: true,
			},
		],
		group: ["user_id"],
		order: sort && order ? [[sequelize.literal(sort), order == 1 ? "ASC" : "DESC"]] : [],
		offset: (page - 1) * Number(item_per_page),
		limit: Number(item_per_page),
	});

	return result;
};

module.exports = {
	readProductSalesReportQuery,
	readTransactionSalesReportQuery,
	readUserSalesReportQuery,
};
