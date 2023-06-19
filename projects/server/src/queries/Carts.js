const {
	Branches,
	Carts,
	Cities,
	Inventories,
	Inventory_promotions,
	Promotions,
	Products,
} = require("../models/index.js");

const readCartQuery = async (query) => {
	return await Carts.findAll({
		where: { user_id: query.user_id },
		include: [
			{
				model: Inventories,
				include: [
					{ model: Branches, include: [{ model: Cities }], attributes: ["name"] },
					{ model: Products },
					{ model: Inventory_promotions, as: "promo", include: { model: Promotions }, attributes: ["value"] },
				],
				attributes: ["stock"],
			},
		],
		attributes: ["quantity"],
	});
};

module.exports = { readCartQuery };