const { Branches } = require("../models/index.js");

const readBranchQuery = async query => {
	return Branches.findAll({ where: { ...query } });
};

module.exports = { readBranchQuery };
