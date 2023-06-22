const { isUser } = require("../middlewares/authMiddleware.js");
const { getDefaultAddress, getAddresses } = require("../controllers/addressController.js");

const router = require("express").Router();

router.get("/list", isUser, getAddresses);
router.get("/default", isUser, getDefaultAddress);

module.exports = router;
