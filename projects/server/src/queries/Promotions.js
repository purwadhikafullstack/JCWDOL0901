const { Promotions } = require("../models/index.js");

const readPromotionQuery = async () => {
	return await Promotions.findAll({});
};

module.exports = { readPromotionQuery };
