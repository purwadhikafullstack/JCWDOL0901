const { Cities, Provinces, Branches, Statuses } = require("../models/index.js");

const readCitiesQuery = async () => {
	return await Cities.findAll();
};

const readCityQuery = async (city_id) => {
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

const readCitiesInProvinceQuery = async (province_id) => {
	return await Cities.findAll({
		where: { province_id },
	});
};

const readBranchQuery = async (branch_id) => {
	return await Branches.findOne({
		where: {
			id: branch_id,
		},
		include: {
			model: Cities,
			include: { model: Provinces },
		},
	});
};

const readStatusesQuery = async () => {
	return await Statuses.findAll({});
};

module.exports = {
	readCitiesQuery,
	readCityQuery,
	readProvincesQuery,
	readCitiesInProvinceQuery,
	readBranchQuery,
	readStatusesQuery,
};
