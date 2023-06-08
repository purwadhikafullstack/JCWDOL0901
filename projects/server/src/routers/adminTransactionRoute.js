const {
	getAdminTransactions,
	getAdminDashboardData,
	getAdminAllTimeData,
} = require("../controllers/adminTransactionController");
const { getBranchId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/list", getAdminTransactions);
router.get("/dashboard-data", getBranchId, getAdminDashboardData);
router.get("/all-time-data", getBranchId, getAdminAllTimeData);

module.exports = router;
