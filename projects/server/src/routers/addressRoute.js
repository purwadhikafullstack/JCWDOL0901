const { getAddresses, getDefaultAddress, createAddress } = require("../controllers/addressController");

const { isUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/list", isUser, getAddresses);
router.get("/default", isUser, getDefaultAddress);
router.post("/create", isUser, createAddress);

module.exports = router;
