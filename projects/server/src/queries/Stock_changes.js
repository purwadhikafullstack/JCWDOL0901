const { Stock_changes } = require("../models/index.js");

const createStockChangeQuery = async (Inventory, previousStock, description, transaction) => {
	return await Stock_changes.create(
		{
			inventory_id: Inventory.id,
			stock_before: previousStock,
			stock_after: Inventory.stock,
			description,
		},
		{ transaction }
	);
};

module.exports = { createStockChangeQuery };
