const {
	Products,
	Branches,
	Inventory_promotions,
	Inventories,
	Categories,
	Cities,
	Promotions,
} = require("../models/index.js");
const { Op } = require("sequelize");

const readProductQuery = async (inventory_id) => {
	return await Products.findOne({
		include: [
			{ model: Categories, attributes: { exclude: "id" } },
			{
				model: Inventories,
				where: { id: inventory_id },
				include: [
					{
						model: Branches,
						include: { model: Cities, attributes: ["type", "name"] },
						attributes: ["id", "name"],
					},
					{
						model: Inventory_promotions,
						as: "promo",
						where: { expired_at: { [Op.gte]: new Date() } },
						required: false,
						attributes: ["value"],
						include: { model: Promotions },
					},
				],
				attributes: ["stock"],
			},
		],
	});
};

const readProductsQuery = async (params) => {
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

module.exports = { readProductQuery, readProductsQuery };
