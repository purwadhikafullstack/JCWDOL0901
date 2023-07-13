const { Proofs } = require("../models/index.js");

const createProofQuery = async (transaction_id, path, transaction) => {
	return await Proofs.create({ transaction_id, image: path }, { transaction });
};

const deleteProofQuery = async (transaction_id, transaction) => {
	return await Proofs.destroy({ where: { transaction_id } }, { transaction });
};

module.exports = { createProofQuery, deleteProofQuery };
