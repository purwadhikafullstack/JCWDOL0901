const { Stock_changes, Inventories, Products } = require("../models/index.js");

const createStockChangeQuery = async (Inventory, previousStock, description, transaction) => {
	return await Stock_changes.create(
		{
			inventory_id: Inventory.id,
			stock_before: previousStock,
			stock_after: Inventory.stock,
			description,
		},
		{ transaction },
	);
};

const readStockChangeQuery = async (query, branch_id) => {
	return await Stock_changes.findAndCountAll({
		where: {
			...query.filter?.Stock_changes,
		},
		include: [
			{
				model: Inventories,
				where: { branch_id },
				include: [{ model: Products, where: { ...query.filter?.Products } }],
			},
		],
		order: [...query.order?.Stock_changes, ["id", "DESC"]],
		distinct: true,
		offset: (query.page - 1) * 3,
		limit: 3,
	});
};

module.exports = { createStockChangeQuery, readStockChangeQuery };
