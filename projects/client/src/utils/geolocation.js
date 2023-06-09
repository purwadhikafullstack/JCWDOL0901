import geolocation from "geolocation";

export const promptUserPermissionForLocation = () => {
	return new Promise((resolve, reject) => {
		geolocation.getCurrentPosition((error, location) => {
			if (error) return reject(error.message);

			return resolve(location);
		});
	});
};
