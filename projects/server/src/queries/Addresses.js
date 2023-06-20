const { Addresses } = require("../models/index.js");

const getUserAddressesQuery = async (user_id) => {
	const address = await Addresses.findAll({
		where: { user_id },
	});

	return address;
};
const getDefaultAddressQuery = async (user_id) => {
	const address = await Addresses.findOne({
		where: { user_id, default: true },
	});

	return address;
};

module.exports = { getUserAddressesQuery, getDefaultAddressQuery };
