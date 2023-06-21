const { updateProfile, getProfile, updateAvatar, getAvatar } = require("../controllers/profileController");

const { isUser } = require("../middlewares/authMiddleware");
const { uploadAvatar } = require("../middlewares/avatarMulter");

const router = require("express").Router();

router.patch("/update", isUser, updateProfile);
router.get("/", isUser, getProfile);
router.get("/avatar", isUser, getAvatar);
router.patch("/avatar/update", isUser, uploadAvatar, updateAvatar);

module.exports = router;
