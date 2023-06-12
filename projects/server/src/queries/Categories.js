const { Categories } = require("../models/index.js");

const readCategoryQuery = async () => {
	return await Categories.findAll({});
};
const createCategoryQuery = async (body, file) => {
	const { name } = body;
	const image = file.path;
	return await Categories.create({ name, image });
};

module.exports = { readCategoryQuery, createCategoryQuery };
