const authRoute = require("./authRoute.js");
const branchRoute = require("./branchRoute.js");
const categoryRoute = require("./categoryRoute.js");
const cartRoute = require("./cartRoute.js");
const dataRoute = require("./dataRoute.js");
const adminTransactionRoute = require("./adminTransactionRoute.js");
const adminPromoRoute = require("./adminPromoRoute.js");
const productRoute = require("./productRoute.js");
const adminInventoryRoute = require("./adminInventoryRoute.js");

module.exports = {
	authRoute,
	dataRoute,
	adminTransactionRoute,
	adminPromoRoute,
	branchRoute,
	cartRoute,
	categoryRoute,
	productRoute,
	adminInventoryRoute,
};
