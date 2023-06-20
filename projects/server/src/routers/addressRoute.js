const { getAddresses, getDefaultAddress } = require("../controllers/addressController");

const { isUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/list", isUser, getAddresses);
router.get("/default", isUser, getDefaultAddress);

module.exports = router;
