const {
	Products,
	Branches,
	Inventory_promotions,
	Inventories,
} = require("../models/index.js");

const readProductsQuery = async params => {
	return await Products.findAll({
		where: { ...params?.Products },
		include: [
			{
				model: Inventories,
				where: { ...params?.Inventories },
				include: [
					{ model: Branches, attributes: ["name"] },
					{ model: Inventory_promotions, as: "promo" },
				],
				attributes: ["id", "stock"],
			},
		],
	});
};

module.exports = { readProductsQuery };
