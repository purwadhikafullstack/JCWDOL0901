const { isUser } = require("../middlewares/authMiddleware.js");
const { getUserCarts, addUserCarts } = require("../controllers/cartController.js");

const router = require("express").Router();

router.get("/", isUser, getUserCarts);
router.post("/add", isUser, addUserCarts);

module.exports = router;
