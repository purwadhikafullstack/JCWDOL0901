const { Products, Branches, Inventory_promotions, Inventories } = require("../models/index.js");

const readProductsQuery = async (params) => {
	const offset = params?.page ? (params?.page - 1) * params?.itemPerPage : null;
	const limit = params?.itemPerPage ? params?.itemPerPage : null;
	const order = params?.order ? [...params?.order] : [];
	console.log(params);
	return await Products.findAndCountAll({
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
		offset,
		limit,
		order,
	});
};

module.exports = { readProductsQuery };
