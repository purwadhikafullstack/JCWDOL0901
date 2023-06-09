const sanitizePostNearestBranch = async (request, response, next) => {
	const { latitude, longitude } = request.body;
	delete request.body;

	request.geolocation = { latitude, longitude };

	next();
};

module.exports = { sanitizePostNearestBranch };
