const {
	getSalesReportByProduct,
	getSalesReportByTransaction,
	getSalesReportByUser,
} = require("../controllers/salesReportController");
const { isAdmin, getBranchId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/product", isAdmin, getBranchId, getSalesReportByProduct);
router.get("/transaction", isAdmin, getBranchId, getSalesReportByTransaction);
router.get("/user", isAdmin, getBranchId, getSalesReportByUser);

module.exports = router;
