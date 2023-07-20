const { readUserVoucherQuery } = require("../queries/User_vouchers");

const userHasVoucher = async (request, response, next) => {
	if (!request.body.voucher.id) next();

	const hasVoucher = await readUserVoucherQuery(request.userData.id, request.body.voucher.id);
	if (!hasVoucher) return response.status(400).send("Voucher not found! Possibly Data Modification");

	next();
};

module.exports = { userHasVoucher };
