const { isUser } = require("../middlewares/authMiddleware.js");
const { getDefaultAddress } = require("../controllers/addressController.js");

const router = require("express").Router();

router.get("/default", isUser, getDefaultAddress);

module.exports = router;
