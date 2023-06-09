const { Categories } = require("../models/index.js");

const readCategoryQuery = async () => {
	return await Categories.findAll({});
};

module.exports = { readCategoryQuery };
