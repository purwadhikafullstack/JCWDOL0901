const { Branches } = require("../models/index.js");
const { getCoordinates } = require("../utils/opencage.js");
const { readCityQuery } = require("../queries/Data.js");

const createBranchQuery = async (body, admin_id, transaction) => {
	const { city_id, name } = body;
	const city = await readCityQuery(city_id);
	const { latitude, longitude } = await getCoordinates(
		city.type,
		city.name,
		city.Province.name
	);
	return await Branches.create(
		{
			admin_id,
			city_id,
			name,
			latitude,
			longitude,
		},
		{ transaction }
	);
};

module.exports = { createBranchQuery };
