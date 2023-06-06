const opencage = require("opencage-api-client");

const getCoordinates = async (type, city, province) => {
	return new Promise(async (resolve, reject) => {
		try {
			await opencage
				.geocode({ q: `${type} ${city}, ${province}` })
				.then(data => {
					if (data.status.code === 200 && data.results.length > 0) {
						const place = data.results[0];
						resolve({
							status: "OK",
							type: place.components._type,
							name: place.formatted,
							latitude: place.geometry.lat,
							longitude: place.geometry.lng,
						});
					} else {
						console.log("Status", data.status.message);
						console.log("total_results", data.total_results);
						resolve({
							status: "NOT FOUND",
						});
					}
				});
		} catch (error) {
			console.log(error);
			reject({ name: "opencageError", detail: { error } });
		}
	});
};

module.exports = { getCoordinates };
