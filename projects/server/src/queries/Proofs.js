const { Proofs } = require("../models/index.js");

const createProofQuery = async (transaction_id, path, transaction) => {
	return await Proofs.create({ transaction_id, image: path }, { transaction });
};

module.exports = { createProofQuery };
