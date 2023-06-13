const { Categories } = require("../models/index.js");

const readCategoryQuery = async () => {
	return await Categories.findAndCountAll({});
};
const createCategoryQuery = async (body, file) => {
	const { name } = body;
	const image = file.path;
	return await Categories.create({ name, image });
};

const updateCategoryQuery = async (body, file) => {
	const { name } = body;
	const image = file.path;
	return await Categories.update({ name, image });
};

module.exports = { readCategoryQuery, createCategoryQuery, updateCategoryQuery };
