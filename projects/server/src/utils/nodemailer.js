const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.NODEMAILER_PASSWORD,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

const generateRegistrationVerificationHTML = token => {
	const verificationUrl = `${process.env.API_URL}/api/auth/user/verify/${token}`;

	return fs
		.readFileSync("./templates/verificationEmail.html", "utf-8")
		.replaceAll("{{data_verification_url}}", verificationUrl);
};

const sendRegistrationVerificationEmail = async (email, token) => {
	return new Promise(async (resolve, reject) => {
		try {
			const html = await generateRegistrationVerificationHTML(token);
			await transporter.sendMail({
				from: `Web Admin <${process.env.NODEMAILER_USER}>`,
				to: email,
				subject: "Account verification",
				html: html,
			});
			resolve();
		} catch (error) {
			reject({ name: "nodemailerError", detail: { error } });
		}
	});
};

module.exports = { sendRegistrationVerificationEmail };
