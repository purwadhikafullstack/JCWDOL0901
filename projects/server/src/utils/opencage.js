const opencage = require("opencage-api-client");

const getCoordinates = async (address, token) => {
	return new Promise(async (resolve, reject) => {
		try {
			opencage
				.geocode({ q: address })
				.then(data => {
					// console.log(JSON.stringify(data));
					if (data.status.code === 200 && data.results.length > 0) {
						console.log(
							data.results.filter(
								city =>
									city.components._type == "county" ||
									city.components._type == "city"
							)
						);
					}
				})
				.catch(error => {
					// console.log(JSON.stringify(error));
					console.log("Error", error.message);
					// other possible response codes:
					// https://opencagedata.com/api#codes
					if (error.status.code === 402) {
						console.log("hit free trial daily limit");
						console.log("become a customer: https://opencagedata.com/pricing");
					}
				});
			resolve();
		} catch (error) {
			reject({ name: "nodemailerError", detail: { error } });
		}
	});
};

module.exports = { getCoordinates };
