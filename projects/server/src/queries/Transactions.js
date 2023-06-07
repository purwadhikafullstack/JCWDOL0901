const {
	Transactions,
	Transaction_details,
	Inventories,
	Products,
} = require("../models/index.js");

const readAdminTransasctionsQuery = async () => {
	return await Transactions.findAll({
		include: {
			model: Transaction_details,
			include: { model: Inventories, include: Products },
		},
	});
};

module.exports = { readAdminTransasctionsQuery };
