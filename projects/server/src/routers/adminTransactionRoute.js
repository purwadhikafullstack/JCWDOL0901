const {
	getAdminTransactions,
	getAdminDashboardData,
	getAdminAllTimeData,
	sendUserOrder,
	cancelUserOrder,
	confirmUserOrder,
	rejectUserOrder,
} = require("../controllers/adminTransactionController");
const { getAdminTransactionQuerySanitizer } = require("../middlewares/sanitizer.js");
const { getBranchId, isAdmin } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/list", isAdmin, getBranchId, getAdminTransactionQuerySanitizer, getAdminTransactions);
router.get("/dashboard-data", isAdmin, getBranchId, getAdminDashboardData);
router.get("/all-time-data", isAdmin, getBranchId, getAdminAllTimeData);
router.patch("/:transaction_id/send", isAdmin, getBranchId, sendUserOrder);
router.patch("/:transaction_id/cancel", isAdmin, getBranchId, cancelUserOrder);
router.patch("/:transaction_id/confirm-proof", isAdmin, getBranchId, confirmUserOrder);
router.patch("/:transaction_id/reject-proof", isAdmin, getBranchId, rejectUserOrder);

module.exports = router;
