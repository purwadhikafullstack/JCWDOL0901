<<<<<<< HEAD
const { isUser } = require("../middlewares/authMiddleware.js");
const { getDefaultAddress, getAddresses } = require("../controllers/addressController.js");
=======
const {
	getAddresses,
	getDefaultAddress,
	createAddress,
	updateAddress,
	setDefaultAddress,
	deleteAddress,
} = require("../controllers/addressController");

const { isUser } = require("../middlewares/authMiddleware");
>>>>>>> development

const router = require("express").Router();

router.get("/list", isUser, getAddresses);
router.get("/default", isUser, getDefaultAddress);
<<<<<<< HEAD
=======
router.post("/create", isUser, createAddress);
router.patch("/update/:id/default", isUser, setDefaultAddress);
router.patch("/update/:id", isUser, updateAddress);
router.delete("/delete/:id", isUser, deleteAddress);
>>>>>>> development

module.exports = router;
