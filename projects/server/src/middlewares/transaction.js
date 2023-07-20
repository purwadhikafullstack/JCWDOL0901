const { readUserVoucherQuery } = require("../queries/User_vouchers");

const userHasVoucher = async (request, response, next) => {
	if (!request.body?.voucher?.id) {
		next();
	} else {
		const voucherValid = await readUserVoucherQuery(request.userData.id, request.body.voucher.id);

		if (voucherValid) {
			next();
		} else {
			return response.status(400).send("Voucher not found! Possibly Data Modification");
		}
	}
};

const createTransactionRequestProtection = async (request, response, next) => {
	if (!request.body?.logistic) {
		return response.status(400).send("Bad Request!");
	} else {
		next();
	}
};

module.exports = { userHasVoucher, createTransactionRequestProtection };
