const { isUser } = require("../middlewares/authMiddleware");
const { postTransaction } = require("../controllers/transactionController.js");
const router = require("express").Router();

router.post("/create", isUser, postTransaction);

module.exports = router;
