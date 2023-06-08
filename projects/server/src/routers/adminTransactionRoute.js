const {
	getAdminTransactions,
	getAdminDashboardData,
	getAdminAllTimeData,
} = require("../controllers/adminTransactionController");

const router = require("express").Router();

router.get("/list", getAdminTransactions);
router.get("/dashboard-data", getAdminDashboardData);
router.get("/all-time-data", getAdminAllTimeData);

module.exports = router;
