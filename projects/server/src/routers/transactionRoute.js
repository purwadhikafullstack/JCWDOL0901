const { isUser } = require("../middlewares/authMiddleware");
const {
	postTransaction,
	postTransactionProof,
	getUserTransaction,
	getUserTransactions,
} = require("../controllers/transactionController.js");
const { postTransactionBodySanitizer } = require("../middlewares/sanitizer");
const { uploadProofFile } = require("../middlewares/multer");
const router = require("express").Router();

router.get("/list", isUser, getUserTransactions);
router.get("/:transaction_id", isUser, getUserTransaction);

router.post("/proof", isUser, uploadProofFile, postTransactionProof);
router.post("/create", isUser, postTransactionBodySanitizer, postTransaction);

module.exports = router;
