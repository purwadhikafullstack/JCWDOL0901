const { User_vouchers } = require("../models/index.js");

const createUserVouchersAsReferralReward = async (registrant_id, referred_id, transaction) => {
	return await User_vouchers.bulkCreate(
		[
			{ user_id: registrant_id, voucher_id: 1 },
			{ user_id: referred_id, voucher_id: 1 },
		],
		{ transaction }
	);
};

module.exports = { createUserVouchersAsReferralReward };
