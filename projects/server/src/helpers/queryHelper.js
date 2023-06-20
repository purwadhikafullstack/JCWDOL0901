const { Op } = require("sequelize");
const { sequelize } = require("../models/index.js");
const { query } = require("express");

const getAdminQueryFilter = async (query) => {
	const filter = { branch: [] };
	const branchFilter = ["name", "id", "admin_id", "city_id"];
	await branchFilter.forEach((key) => {
		if (query[key]) filter.branch.push({ [key]: query[key] });
	});

	return filter;
};

const getAdminQueryOrder = async (query) => {
	const order = { branch: [] };
	const branchOrder = ["name"];
	const ascending = query.asc == 1 ? "ASC" : "DESC";

	branchOrder.forEach((key) => {
		if (query.order === key) order.branch.push([sequelize.models.Branches, key, ascending]);
	});

	return order;
};

const getInventoryPromotionQueryFilter = async (query) => {
	const filter = { Inventory_promotions: {} };

	const inventoryPromotionsFilter = ["promotion_id"];
	await inventoryPromotionsFilter.forEach((key) => {
		if (query[key]) filter.Inventory_promotions[key] = query[key];
	});

	return filter;
};

const getProductsRecommendationFilter = async (query) => {
	const filter = { Inventories: {} };

	const inventoriesFilter = ["branch_id"];

	await inventoriesFilter.forEach((key) => {
		if (query[key]) filter.Inventories[key] = query[key];
	});

	return filter;
};

const getRelatedProductsFilter = async (query) => {
	const filter = { Products: {}, Inventories: {} };

	const inventoriesFilter = ["branch_id"];
	const inventoriesFilterNegate = ["id"];
	const productsFilter = ["category_id"];

	await inventoriesFilter.forEach((key) => {
		if (query[key]) filter.Inventories[key] = query[key];
	});
	await inventoriesFilterNegate.forEach((key) => {
		if (query[key]) filter.Inventories[key] = { [Op.not]: query[key] };
	});
	await productsFilter.forEach((key) => {
		if (query[key]) filter.Products[key] = query[key];
	});
	return filter;
};

const getCategoryQueryFilter = async (query) => {
	const filter = query.name ? { name: { [Op.like]: "%" + query.name + "%" } } : {};
	return filter;
};

const getCategoryQueryOrder = async (query) => {
	const ascending = query.asc == 1 ? "ASC" : "DESC";
	const order = query.order && query.asc ? [[query.order, ascending]] : [];
	return order;
};

const getProductQueryFilter = async (query) => {
	const filter = {};
	const productFilter = ["name", "category_id", "branch_id"];
	await productFilter.forEach((key) => {
		if (key === "name" && query[key]) filter[key] = { [Op.like]: "%" + query[key] + "%" };
		else if (query[key]) filter[key] = query[key];
	});
	return filter;
};

const getProductQueryOrder = async (query) => {
	const ascending = query.asc == 1 ? "ASC" : "DESC";
	const order = query.order && query.asc ? [[query.order, ascending]] : [];
	return order;
};

const getInventoryPromotionQueryOrder = async (query) => {
	const order = { Inventory_promotions: [] };
	const inventoryPromotionsOrder = ["start_at", "expired_at"];
	const ascending = query.asc == 1 ? "ASC" : "DESC";

	inventoryPromotionsOrder.forEach((key) => {
		if (query.order === key) order.Inventory_promotions.push([key, ascending]);
	});

	return order;
};

// TODO: Delete
const paginateData = (data, page) => {
	const itemPerPage = 8;
	const startIndex = (page - 1) * itemPerPage;
	const endIndex = page * itemPerPage;

	return data.slice(startIndex, endIndex);
};

const getInventoriesQueryFilter = async (query) => {
	const filter = { Products: {} };

	const productsFilter = ["category_id"];

	await productsFilter.forEach((key) => {
		if (query[key]) filter.Products[key] = query[key];
	});

	return filter;
};

const getInventoriesQueryOrder = async (query) => {
	const order = { Inventories: [], Products: [] };

	const inventoriesOrder = ["stock"];
	const productsOrder = ["name"];

	const ascending = query.asc == 1 ? "ASC" : "DESC";

	inventoriesOrder.forEach((key) => {
		if (query.order === key) order.Inventories.push([key, ascending]);
	});

	productsOrder.forEach((key) => {
		if (query.order === key) order.Products.push([key, ascending]);
	});

	return order;
};

module.exports = {
	paginateData,
	getAdminQueryFilter,
	getAdminQueryOrder,
	getInventoryPromotionQueryFilter,
	getInventoryPromotionQueryOrder,
	getCategoryQueryFilter,
	getCategoryQueryOrder,
	getInventoriesQueryFilter,
	getInventoriesQueryOrder,
	getProductQueryFilter,
	getProductQueryOrder,
	getProductsRecommendationFilter,
	getRelatedProductsFilter,
};
