const isUserErrorHandler = async (response, error) => {
	if (error.name === "JsonWebTokenError") {
		if (error.message === "invalid token") {
			return response.status(400).send({ message: "invalid token" });
		} else if (error.message === "jwt malformed") {
			return response.status(401).send({ message: "jwt malformed" });
		}
	} else if (error.name === "TokenExpiredError") {
		if (error.message === "jwt expired") {
			return response.status(401).send({ message: "token expired" });
		}
	} else if (error.name === "EmptyTokenError") {
		return response.status(403).send({ message: "missing token" });
	}
	return response.status(403).send({ message: error });
};

module.exports = { isUserErrorHandler };
