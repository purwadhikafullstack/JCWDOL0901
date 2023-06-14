const { Categories } = require("../models/index.js");

const readCategoryQuery = async (filter, order, page, itemPerPage) => {
	console.log(page, itemPerPage);
	return await Categories.findAndCountAll({
		// where: { ...filter },
		offset: (page - 1) * itemPerPage,
		limit: itemPerPage,
	});
};
const createCategoryQuery = async (body, file) => {
	const { name } = body;
	const image = file.path;
	return await Categories.create({ name, image });
};

const updateCategoryQuery = async (body, file, params) => {
	const id = params.categoryId;
	const { name } = body;
	const image = file ? file.path : undefined;
	return await Categories.update({ name, image }, { where: { id } });
};

module.exports = { readCategoryQuery, createCategoryQuery, updateCategoryQuery };
