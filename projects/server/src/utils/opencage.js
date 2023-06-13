const opencage = require("opencage-api-client");

const determineSuccessMessage = data => {
	if (data.status.code === 200 && data.results.length > 0) {
		const place = data.results[0];
		return {
			status: "OK",
			type: place.components._type,
			name: place.formatted,
			latitude: place.geometry.lat,
			longitude: place.geometry.lng,
		};
	} else {
		return {
			status: "NOT FOUND",
		};
	}
};

const getCoordinates = async (type, city, province) => {
	return new Promise(async (resolve, reject) => {
		await opencage
			.geocode({ q: `${type} ${city}, ${province}`, key: process.env.OPENCAGE_API_KEY })
			.then(data => resolve(determineSuccessMessage(data)))
			.catch(error => reject({ name: "opencageError", detail: { error } }));
	});
};

module.exports = { getCoordinates };
