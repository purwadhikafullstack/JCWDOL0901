const { Addresses, Cities, Provinces } = require("../models/index.js");

<<<<<<< HEAD
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
=======
const getUserAddressesQuery = async (user_id) => {
	const addressData = await Addresses.findAll({
		where: { user_id },
		include: [{ model: Cities, include: [{ model: Provinces }] }],
	});

	return addressData;
};

const getDefaultAddressQuery = async (user_id) => {
	const addressData = await Addresses.findOne({
		where: { user_id, is_default: true },
		include: [{ model: Cities, include: [{ model: Provinces }] }],
	});

	return addressData;
};

const createAddressQuery = async (user_id, label, city_id, detail, latitude, longitude, is_default) => {
	const addressData = await Addresses.create({
		user_id,
		label,
		city_id,
		detail,
		latitude,
		longitude,
		is_default,
	});

	return addressData;
};

const updateAddressQuery = async (id, user_id, label, city_id, detail, latitude, longitude) => {
	console.log(detail);
	const addressData = await Addresses.update(
		{
			label,
			city_id,
			detail,
			latitude,
			longitude,
		},
		{ where: { id, user_id } },
	);

	return addressData;
};

const resetDefaultAddressQuery = async (user_id, is_default, transaction) => {
	return await Addresses.update({ is_default }, { where: { user_id }, transaction });
};

const setDefaultAddressQuery = async (id, user_id, is_default, transaction) => {
	return await Addresses.update({ is_default }, { where: { id, user_id }, transaction });
};

const deleteAddressQuery = async (id, user_id) => {
	return await Addresses.destroy({ where: { id, user_id } });
};

// const readDefaultAddressQuery = async (filter) => {
// 	return await Addresses.findOne({
// 		where: { ...filter },
// 		include: [{ model: Cities, include: [{ model: Provinces }] }],
// 	});
// };

// const readAddressQuery = async (filter) => {
// 	return await Addresses.findAll({
// 		where: { ...filter },
// 		include: [{ model: Cities, include: [{ model: Provinces }] }],
// 		order: [["default", "DESC"]],
// 	});
// };

module.exports = {
	getUserAddressesQuery,
	getDefaultAddressQuery,
	createAddressQuery,
	updateAddressQuery,
	resetDefaultAddressQuery,
	setDefaultAddressQuery,
	deleteAddressQuery,
	// readDefaultAddressQuery,
	// readAddressQuery,
};
>>>>>>> development
