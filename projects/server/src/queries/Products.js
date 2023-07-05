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

const readProductsQuery = async (params) => {
	const offset = params?.page ? (params?.page - 1) * params?.itemPerPage : null;
	const limit = params?.itemPerPage ? params?.itemPerPage : null;
	const order = params?.order ? [...params?.order] : [];

	return await Products.findAndCountAll({
		where: { ...params?.Products, active: true },
		include: [
			{
				model: Inventories,
				where: { ...params?.Inventories },
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
		where: { ...params?.Products, active: true },
		offset,
		limit,
		order,
	});
};

const createProductQuery = async (body, file) => {
	const { name, price, description, weight, unit, category_id } = body;
	console.log("queries product file.?: ", file)
	const image = `/product/${file}`;
	return await Products.create({ name, image, price, description, weight, unit, category_id });
};

const updateProductQuery = async (body, file, params) => {
	const id = params.productId;
	const { name, price, description, weight, unit, category_id } = body;
	const image = file ? `/product/${file.filename}` : undefined;
	return await Products.update({ price, description, weight, unit, category_id }, { where: { id } });
};

const deleteProductQuery = async (params) => {
	const id = Number(params.productId);
	return await Products.destroy({ where: { id } });
};

module.exports = {
	readProductQuery,
	readProductsQuery,
	readProductsOnlyQuery,
	createProductQuery,
	updateProductQuery,
	deleteProductQuery,
};
