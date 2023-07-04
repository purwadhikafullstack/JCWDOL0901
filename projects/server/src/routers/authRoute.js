const {
	registerUser,
	getAdmins,
	registerAdmin,
	verifyUser,
	loginAdmin,
	loginUser,
	isSuper,
	updatePassword,
	confirmPassword,
	forgotPassword,
	resetPassword,
} = require("../controllers/authController");

const { getReferrerId, isSuperAdmin, isAdmin, isUser, isVerifiedUser } = require("../middlewares/authMiddleware");

const { getAdminsQuerySanitizer } = require("../middlewares/sanitizer.js");

const router = require("express").Router();

router.get("/admin/list", isAdmin, getAdminsQuerySanitizer, getAdmins);
router.post("/admin/register", isAdmin, isSuperAdmin, registerAdmin);
router.post("/admin/login", loginAdmin);
router.get("/admin/super", isSuper);

router.post("/user/login", loginUser);
router.post("/user/register", getReferrerId, registerUser);
router.get("/user/verify/:token", verifyUser);
router.patch("/user/password/update", isUser, isVerifiedUser, updatePassword);
router.post("/user/verify/password", isUser, confirmPassword);
router.post("/user/password/request", forgotPassword);
router.patch("/user/password/reset/:token", resetPassword);

module.exports = router;
