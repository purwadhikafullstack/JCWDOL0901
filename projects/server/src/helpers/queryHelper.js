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
		if (query.order === key)
			order.branch.push([sequelize.models.Branches, key, ascending]);
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
};
