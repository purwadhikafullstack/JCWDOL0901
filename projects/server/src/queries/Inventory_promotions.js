const { Inventory_promotions, Inventories, Promotions, Products } = require("../models/index.js");

const createInventoryPromotionQuery = async data => {
	return await Inventory_promotions.create({ ...data });
};

const readInventoryPromotionQuery = async (branch_id, filter, order, page) => {
	return await Inventory_promotions.findAndCountAll({
		where: filter?.Inventory_promotions,
		include: [
			{
				model: Inventories,
				where: { branch_id },
				attributes: ["stock"],
				include: { model: Products, attributes: { exclude: "id" } },
			},
			{ model: Promotions },
		],
		offset: (page - 1) * 3,
		limit: 3,
		order: [...order?.Inventory_promotions],
	});
};

const updateInventoryPromotionQuery = async (data, id) => {
	return await Inventory_promotions.update({ ...data }, { where: { id } });
};

const deleteInventoryPromotionQuery = async id => {
	return await Inventory_promotions.destroy({ where: { id } });
};

module.exports = {
	createInventoryPromotionQuery,
	readInventoryPromotionQuery,
	updateInventoryPromotionQuery,
	deleteInventoryPromotionQuery,
};
