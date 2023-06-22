const { isUser } = require("../middlewares/authMiddleware");
const { getUserVouchers } = require("../controllers/voucherController.js");

const router = require("express").Router();

router.get("/user", isUser, getUserVouchers);

module.exports = router;
