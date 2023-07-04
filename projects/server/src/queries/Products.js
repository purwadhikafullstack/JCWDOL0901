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
						where: { isActive: true },
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

<<<<<<< HEAD
const readProductsQuery = async (filter) => {
	return await Products.findAll({
		where: { ...filter?.Products },
=======
const readProductsQuery = async (params) => {
	const offset = params?.page ? (params?.page - 1) * params?.itemPerPage : null;
	const limit = params?.itemPerPage ? params?.itemPerPage : null;
	const order = params?.order ? [...params?.order] : [];

	return await Products.findAndCountAll({
		where: { ...params?.Products, active: true },
>>>>>>> development
		include: [
			{
				model: Inventories,
				where: { ...filter?.Inventories },
				include: [
					{ model: Branches, attributes: ["name"] },
					{
						model: Inventory_promotions,
						as: "promo",
						include: [{ model: Promotions }],
					},
				],
				attributes: ["id", "stock"],
			},
		],
		offset,
		limit,
		order,
	});
};
const readProductsOnlyQuery = async (params) => {
	const offset = params?.page ? (params?.page - 1) * params?.itemPerPage : null;
	const limit = params?.itemPerPage ? params?.itemPerPage : null;
	const order = params?.order ? [...params?.order] : [];

	return await Products.findAndCountAll({
		where: { ...params?.Products },
		include: Categories,
		offset,
		limit,
		order,
	});
};

<<<<<<< HEAD
module.exports = { readProductQuery, readProductsQuery };
=======
module.exports = { readProductQuery, readProductsQuery, readProductsOnlyQuery };
>>>>>>> development
