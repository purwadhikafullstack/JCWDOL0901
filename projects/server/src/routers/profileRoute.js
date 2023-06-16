const { updateProfile, getProfile } = require("../controllers/profileController");

const { isUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.patch("/update", isUser, updateProfile);
router.get("/", isUser, getProfile);

module.exports = router;
