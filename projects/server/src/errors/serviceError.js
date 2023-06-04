const fs = require("fs");

const writeLogFile = (error, source) => {
	const previousLogs = fs.readFileSync("./errors/log.txt", "utf8");

	const log = `
	===
	Time: ${new Date().toString()}
	Source: ${source}
	Error: ${JSON.stringify(error)}
	`;

	fs.writeFileSync("./errors/log.txt", previousLogs.concat(log), {
		encoding: "utf-8",
	});
};

const startRegistrationErrorHandler = async error => {
	await writeLogFile(error, "startRegistrationErrorHandler");

	if (error.name === "SequelizeUniqueConstraintError") {
		return { code: 400, message: `${error?.errors[0]?.path} already exist!` };
	} else if (error.name === "nodemailerError") {
		return {
			code: 503,
			message: `Service Unavailable, please try again later!`,
		};
	}
	return {
		code: 500,
		message: "Internal Server Error, please contact us!",
	};
};

module.exports = { startRegistrationErrorHandler };