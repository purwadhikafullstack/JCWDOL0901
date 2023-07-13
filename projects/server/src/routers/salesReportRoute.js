const {
	getSalesReportByProduct,
	getSalesReportByTransaction,
	getSalesReportByUser,
} = require("../controllers/salesReportController");
const { isAdmin, isSuperAdmin } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/product", isAdmin, isSuperAdmin, getSalesReportByProduct);
router.get("/transaction", isAdmin, isSuperAdmin, getSalesReportByTransaction);
router.get("/user", isAdmin, isSuperAdmin, getSalesReportByUser);

module.exports = router;
