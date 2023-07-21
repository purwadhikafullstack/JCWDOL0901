const { Op } = require("sequelize");
const { Inventory_promotions, Inventories, Promotions, Products } = require("../models/index.js");

const createInventoryPromotionQuery = async (data, transaction) => {
	return await Inventory_promotions.create({ ...data }, { transaction });
};

const readInventoryPromotionQuery = async (branch_id, name, filter, order, page) => {
	return await Inventory_promotions.findAndCountAll({
		where: {
			...filter.Inventory_promotions,
			isActive: true,
		},
		include: [
			{
				model: Inventories,
				where: { branch_id },
				attributes: ["stock"],
				include: {
					model: Products,
					attributes: { exclude: "id" },
					where: { name: { [Op.like]: `%${name}%` } },
				},
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

const deleteInventoryPromotionQuery = async (id) => {
	return await Inventory_promotions.destroy({ where: { id } });
};

const clearInventoryPromotionQuery = async (query, transaction) => {
	return await Inventory_promotions.destroy({ where: { ...query } }, { transaction });
};

module.exports = {
	createInventoryPromotionQuery,
	readInventoryPromotionQuery,
	updateInventoryPromotionQuery,
	deleteInventoryPromotionQuery,
	clearInventoryPromotionQuery,
};
