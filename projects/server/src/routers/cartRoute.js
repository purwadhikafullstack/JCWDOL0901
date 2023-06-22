const { isUser } = require("../middlewares/authMiddleware.js");
const { getUserCarts } = require("../controllers/cartController.js");

const router = require("express").Router();

router.get("/", isUser, getUserCarts);

module.exports = router;
