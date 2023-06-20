const { isUser } = require("../middlewares/authMiddleware");
const { postTransaction } = require("../controllers/transactionController.js");
const { postTransactionBodySanitizer } = require("../middlewares/sanitizer");
const router = require("express").Router();

router.post("/create", isUser, postTransactionBodySanitizer, postTransaction);

module.exports = router;
