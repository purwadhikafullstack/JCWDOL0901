const { Addresses } = require("../models/index.js");

const getUserAddressesQuery = async (user_id) => {
	const addressData = await Addresses.findAll({
		where: { user_id },
	});

	return addressData;
};

const getDefaultAddressQuery = async (user_id) => {
	const addressData = await Addresses.findOne({
		where: { user_id, default: true },
	});

	return addressData;
};
const createAddressQuery = async (user_id, label, city_id, address, latitude, longitude) => {
	const addressData = await Addresses.create({
		user_id,
		label,
		city_id,
		address,
		latitude,
		longitude,
		default: false,
	});

	return addressData;
};

module.exports = { getUserAddressesQuery, getDefaultAddressQuery, createAddressQuery };
