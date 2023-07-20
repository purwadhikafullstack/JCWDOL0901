const { readUserVoucherQuery } = require("../queries/User_vouchers");

const userHasVoucher = async (request, response, next) => {
	const hasVoucher = await readUserVoucherQuery(request.userData.id, request.payload.voucher.id);

	if (!hasVoucher) return response.status(400).send("Voucher not found!");

	next();
};

module.exports = { userHasVoucher };
