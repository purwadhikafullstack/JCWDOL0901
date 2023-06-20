const {
	getAddresses,
	getDefaultAddress,
	createAddress,
	updateAddress,
	setDefaultAddress,
	deleteAddress,
} = require("../controllers/addressController");

const { isUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/list", isUser, getAddresses);
router.get("/default", isUser, getDefaultAddress);
router.post("/create", isUser, createAddress);
router.patch("/update/:id", isUser, updateAddress);
router.patch("/update/:id/default", isUser, setDefaultAddress);
router.delete("/delete/:id", isUser, deleteAddress);

module.exports = router;
