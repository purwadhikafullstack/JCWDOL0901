const { Cities, Provinces } = require("../models/index.js");

const readCitiesQuery = async () => {
	return await Cities.findAll();
};

const readCityQuery = async city_id => {
	return await Cities.findOne({
		where: {
			id: city_id,
		},
		include: [
			{
				model: Provinces,
			},
		],
	});
};

const readProvincesQuery = async () => {
	return await Provinces.findAll();
};

const readCitiesInProvinceQuery = async province_id => {
	return await Cities.findAll({
		where: { province_id },
	});
};

module.exports = {
	readCitiesQuery,
	readCityQuery,
	readProvincesQuery,
	readCitiesInProvinceQuery,
};
