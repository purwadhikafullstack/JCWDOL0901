const { Inventory_promotions } = require("../models/index.js");

const createInventoryPromotionQuery = async data => {
	await Inventory_promotions.create({ ...data });
};

const updateInventoryPromotionQuery = async (data, id) => {
	await Inventory_promotions.update({ ...data }, { where: { id } });
};

module.exports = { createInventoryPromotionQuery, updateInventoryPromotionQuery };
