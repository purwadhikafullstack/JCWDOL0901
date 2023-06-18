const { Addresses, Cities, Provinces } = require("../models/index.js");

const readDefaultAddressQuery = async (filter) => {
	return await Addresses.findOne({
		where: { ...filter },
		include: [{ model: Cities, include: [{ model: Provinces }] }],
	});
};

module.exports = { readDefaultAddressQuery };
