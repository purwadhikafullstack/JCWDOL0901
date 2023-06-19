const { Addresses, Cities, Provinces } = require("../models/index.js");

const readDefaultAddressQuery = async (filter) => {
	return await Addresses.findOne({
		where: { ...filter },
		include: [{ model: Cities, include: [{ model: Provinces }] }],
	});
};

const readAddressQuery = async (filter) => {
	return await Addresses.findAll({
		where: { ...filter },
		include: [{ model: Cities, include: [{ model: Provinces }] }],
		order: [["default", "DESC"]],
	});
};

module.exports = { readDefaultAddressQuery, readAddressQuery };
