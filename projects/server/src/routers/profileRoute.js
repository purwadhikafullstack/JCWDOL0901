const { updateProfile, getProfile } = require("../controllers/authController");

const { isUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.patch("/update", updateProfile);
router.get("/", isUser, getProfile);

module.exports = router;
