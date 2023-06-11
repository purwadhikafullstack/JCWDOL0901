const { Categories } = require("../models/index.js");

const readCategoryQuery = async () => {
	return await Categories.findAll({});
};
const createCategoryQuery = async body => {
	const { name, image } = body;
	return await Categories.create({ name, image });
};

module.exports = { readCategoryQuery, createCategoryQuery };
