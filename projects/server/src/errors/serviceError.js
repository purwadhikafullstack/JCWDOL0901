const { log } = require("console");
const fs = require("fs");

const writeLogFile = (error, source) => {
	const previousLogs = fs.readFileSync(`${__dirname}/log.txt`, "utf8");

	const log = `
	===
	Time: ${new Date().toString()}
	Source: ${source}
	Error: ${JSON.stringify(error)}
	`;

	fs.writeFileSync(`${__dirname}/log.txt`, previousLogs.concat(log), {
		encoding: "utf-8",
	});
};

const startFindErrorHandler = async error => {
	await writeLogFile(error, "startFindErrorHandler");

	return { code: 500, message: "Internal Server Error, please contact us!" };
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

const forbiddenErrorHandler = async () => {
	await writeLogFile(
		"Forbidden access, a non super admin trying to access restricted request",
		"forbiddenErrorHandler"
	);

	return {
		code: 403,
		message: "You don't have permission to accces / on this server.",
	};
};

const startVerificationErrorHandler = async error => {
	await writeLogFile(error, "startVerificationErrorHandler");

	if (error === "INVALID_TOKEN") {
		return { code: 404, message: "Invalid token!" };
	}

	return {
		code: 500,
		message: "Internal Server Error, please contact us!",
	};
};

const startCreateHandler = async error => {
	await writeLogFile(error, "startCreateHandler");

	return { code: 500, message: "Internal Server Error, please contact us!" };
};

const startDeleteteHandler = async error => {
	await writeLogFile(error, "startDeleteteHandler");
	if (error.name === "SequelizeForeignKeyConstraintError") {
		return { code: 500, message: "ER_ROW_IS_REFERENCED_2" };
	}
	return { code: 500, message: "Internal Server Error, please contact us!" };
};
const startUpdateErrorHandler = async error => {
	await writeLogFile(error, "startUpdateErrorHandler");

	return { code: 500, message: "Internal Server Error, please contact us!" };
};

module.exports = {
	startRegistrationErrorHandler,
	startFindErrorHandler,
	forbiddenErrorHandler,
	startVerificationErrorHandler,
	startCreateHandler,
	startDeleteteHandler,
	startUpdateErrorHandler,
};
