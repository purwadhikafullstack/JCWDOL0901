const {
	Transactions,
	Transaction_details,
	Inventories,
	Products,
} = require("../models/index.js");
const { Op } = require("sequelize");

const readAdminTransasctionsQuery = async (from, to, status) => {
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

	return await Transactions.findAll({
		where: {
			...dateQueryHelper,
			...statusQueryHelper,
		},
		// include: {
		// 	model: Transaction_details,
		// 	include: { model: Inventories, include: Products },
		// },
	});
};

module.exports = { readAdminTransasctionsQuery };
