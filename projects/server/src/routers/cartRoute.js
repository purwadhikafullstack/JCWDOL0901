const { isUser } = require("../middlewares/authMiddleware.js");
const {
	getUserCarts,
	addUserCarts,
	updateUserCarts,
	deleteUserCarts,
	clearCart,
} = require("../controllers/cartController.js");

const router = require("express").Router();

router.get("/", isUser, getUserCarts);
router.post("/add", isUser, addUserCarts);
router.patch("/update", isUser, updateUserCarts);
router.delete("/delete/:inventory_id", isUser, deleteUserCarts);
router.delete("/clear", isUser, clearCart);

module.exports = router;
