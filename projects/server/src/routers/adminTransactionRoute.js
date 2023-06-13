const {
	getAdminTransactions,
	getAdminDashboardData,
	getAdminAllTimeData,
} = require("../controllers/adminTransactionController");
const { isAdmin, getBranchId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/list", getAdminTransactions);
router.get("/dashboard-data", isAdmin, getBranchId, getAdminDashboardData);
router.get("/all-time-data", isAdmin, getBranchId, getAdminAllTimeData);

module.exports = router;
