const {
	getAdminTransactions,
	getAdminDashboardData,
} = require("../controllers/adminTransactionController");

const router = require("express").Router();

router.get("/list", getAdminTransactions);
router.get("/dashboard-data", getAdminDashboardData);

module.exports = router;
