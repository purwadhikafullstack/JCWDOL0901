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

const readProductSalesReportQuery = async (branch_id) => {
	const where = branch_id == 0 ? { status_id: 5 } : { status_id: 5, branch_id };

	const result = await Transaction_details.findAll({
		attributes: ["name", [sequelize.fn("SUM", sequelize.col("quantity")), "qty"]],
		include: [
			{
				model: Transactions,
				attributes: [],
				where,
				required: true,
			},
		],
		group: ["name"],
		order: [[sequelize.literal("qty"), "DESC"]],
	});

	return result;
};

const readTransactionSalesReportQuery = async () => {
	const result = await Transactions.findAll({
		attributes: ["amount", "updated_at"],
		where: { status_id: 5, branch_id: 1 },
	});

	return result;
};

const readUserSalesReportQuery = async () => {
	const result = await Transactions.findAll({
		attributes: ["user_id", [sequelize.fn("SUM", sequelize.col("amount")), "total_spending"]],
		include: [
			{
				model: Users,
				where: { status_id: 5, branch_id: 1 },
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
