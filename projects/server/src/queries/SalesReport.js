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

const readProductSalesReportQuery = async (branch_id, from, to) => {
	// const where = branch_id == 0 ? { status_id: 5 } : { status_id: 5, branch_id };
	const result = await Transaction_details.findAll({
		attributes: ["name", [sequelize.fn("SUM", sequelize.col("quantity")), "qty"]],
		include: [
			{
				model: Transactions,
				where: {
					status_id: 5,
					...dateQueryHelper(from, to),
					...branchQueryHelper(branch_id),
				},
				include: [{ model: Products, where: { ...query.filter?.Products } }],
				attributes: [],
				required: true,
			},
		],
		group: ["name"],
		order: [[sequelize.literal("qty"), "DESC"]],
	});

	return result;
};

const readTransactionSalesReportQuery = async (branch_id, from, to) => {
	const result = await Transactions.findAll({
		attributes: ["amount", "updated_at"],
		where: {
			status_id: 5,
			...dateQueryHelper(from, to),
			...branchQueryHelper(branch_id),
		},
		order: [[sequelize.literal("updated_at"), "DESC"]],
	});

	return result;
};

const readUserSalesReportQuery = async (branch_id, from, to) => {
	console.log("from userSalesReport: ", from);
	console.log("to userSalesReport: ", to);
	const result = await Transactions.findAll({
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
		order: [[sequelize.literal("total_spending"), "DESC"]],
	});

	return result;
};

module.exports = {
	readProductSalesReportQuery,
	readTransactionSalesReportQuery,
	readUserSalesReportQuery,
};
