const { Op } = require("sequelize");
const { sequelize } = require("../models/index.js");

const getAdminQueryFilter = async query => {
	const filter = { branch: [] };
	const branchFilter = ["name", "id", "admin_id", "city_id"];
	await branchFilter.forEach(key => {
		if (query[key]) filter.branch.push({ [key]: query[key] });
	});

	return filter;
};

const getAdminQueryOrder = async query => {
	const order = { branch: [] };
	const branchOrder = ["name"];
	const ascending = query.asc == 1 ? "ASC" : "DESC";

	branchOrder.forEach(key => {
		if (query.order === key) order.branch.push([sequelize.models.Branches, key, ascending]);
	});

	return order;
};

const getInventoryPromotionQueryFilter = async query => {
	const filter = { Inventory_promotions: {} };

	const inventoryPromotionsFilter = ["promotion_id"];
	await inventoryPromotionsFilter.forEach(key => {
		if (query[key]) filter.Inventory_promotions[key] = query[key];
	});

	return filter;
};

const getCategoryQueryFilter = async query => {
	const filter = query.name ? { name: { [Op.like]: "%" + query.name + "%" } } : {};
	return filter;
};

const getInventoryPromotionQueryOrder = async query => {
	const order = { Inventory_promotions: [] };
	const inventoryPromotionsOrder = ["start_at", "expired_at"];
	const ascending = query.asc == 1 ? "ASC" : "DESC";

	inventoryPromotionsOrder.forEach(key => {
		if (query.order === key) order.Inventory_promotions.push([key, ascending]);
	});

	return order;
};

const paginateData = (data, page) => {
	const itemPerPage = 8;
	const startIndex = (page - 1) * itemPerPage;
	const endIndex = page * itemPerPage;

	return data.slice(startIndex, endIndex);
};

module.exports = {
	paginateData,
	getAdminQueryFilter,
	getAdminQueryOrder,
	getInventoryPromotionQueryFilter,
	getInventoryPromotionQueryOrder,
	getCategoryQueryFilter,
};
