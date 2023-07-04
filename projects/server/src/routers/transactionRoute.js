const { isUser } = require("../middlewares/authMiddleware");
<<<<<<< HEAD
const { postTransaction } = require("../controllers/transactionController.js");
const { postTransactionBodySanitizer } = require("../middlewares/sanitizer");
const router = require("express").Router();

=======
const {
	postTransaction,
	postTransactionProof,
	getUserTransaction,
} = require("../controllers/transactionController.js");
const { postTransactionBodySanitizer } = require("../middlewares/sanitizer");
const { uploadProofFile } = require("../middlewares/multer");
const router = require("express").Router();

router.get("/:transaction_id", isUser, getUserTransaction);

router.post("/proof", isUser, uploadProofFile, postTransactionProof);
>>>>>>> development
router.post("/create", isUser, postTransactionBodySanitizer, postTransaction);

module.exports = router;
