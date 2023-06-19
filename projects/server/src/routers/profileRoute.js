const { updateProfile, getProfile, updateAvatar } = require("../controllers/profileController");

const { isUser } = require("../middlewares/authMiddleware");
const { uploadAvatarFile } = require("../middlewares/multer");

const router = require("express").Router();

router.patch("/update", isUser, updateProfile);
router.get("/", isUser, getProfile);
router.patch("/avatar/update", isUser, uploadAvatarFile, updateAvatar)

module.exports = router;
