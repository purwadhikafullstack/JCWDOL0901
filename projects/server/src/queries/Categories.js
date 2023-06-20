const { Categories } = require("../models/index.js");

const readCategoryQuery = async (filter, order, page, itemPerPage) => {
	const offset = page ? (page - 1) * itemPerPage : null;
	const limit = itemPerPage ? itemPerPage : null;

	return await Categories.findAndCountAll({
		where: { ...filter },
		offset,
		limit,
		order: [...order],
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

const deleteCategoryQuery = async (params) => {
	const id = Number(params.categoryId);
	return await Categories.destroy({ where: { id } });
};

module.exports = {
	readCategoryQuery,
	createCategoryQuery,
	updateCategoryQuery,
	deleteCategoryQuery,
};
