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

const getInventoryPromotionQueryOrder = async query => {
	const order = { Inventory_promotions: [] };
	const inventoryPromotionsOrder = ["start_at", "expired_at"];
	const ascending = query.asc == 1 ? "ASC" : "DESC";

	inventoryPromotionsOrder.forEach(key => {
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

const getInventoriesQueryFilter = async query => {
	const filter = { Products: {} };

	const productsFilter = ["category_id"];

	await productsFilter.forEach(key => {
		if (query[key]) filter.Products[key] = query[key];
	});

	return filter;
};

const getInventoriesQueryOrder = async query => {
	const order = { Inventories: [], Products: [] };

	const inventoriesOrder = ["stock"];
	const productsOrder = ["name"];

	const ascending = query.asc == 1 ? "ASC" : "DESC";

	inventoriesOrder.forEach(key => {
		if (query.order === key) order.Inventories.push([key, ascending]);
	});

	productsOrder.forEach(key => {
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
	getInventoriesQueryFilter,
	getInventoriesQueryOrder,
};
