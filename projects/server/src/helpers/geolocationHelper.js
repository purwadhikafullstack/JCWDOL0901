const getRadian = (latitude) => {
	return (Math.PI * latitude) / 180;
};

const measureDistance = (branchLatitudeRadian, userLatitudeRadian, thetaRadian) => {
	return (
		Math.sin(branchLatitudeRadian) * Math.sin(userLatitudeRadian) +
		Math.cos(branchLatitudeRadian) * Math.cos(userLatitudeRadian) * Math.cos(thetaRadian)
	);
};

const getBranchDistance = (latitude, longitude, userGeolocation) => {
	const branchLatitudeRadian = getRadian(latitude);
	const userLatitudeRadian = getRadian(userGeolocation.latitude);
	const thetaRadian = getRadian(longitude - userGeolocation.longitude);

	let distance = measureDistance(branchLatitudeRadian, userLatitudeRadian, thetaRadian);

	if (distance > 1) distance = 1;
	distance = ((Math.acos(distance) * 180) / Math.PI) * 60 * 1.1515;

	return distance;
};

module.exports = {
	determineNearestBranch: async (Branches, userGeolocation) => {
		let nearestBranch = null;
		let minDistance = Infinity;

		await Branches.forEach((branch) => {
			const { latitude, longitude } = branch;
			const distance = getBranchDistance(latitude, longitude, userGeolocation);

			if (distance < minDistance) {
				minDistance = distance;
				nearestBranch = branch;
			}
		});
		return nearestBranch;
	},
};
