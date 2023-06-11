const {
	registerUser,
	getAdmins,
	registerAdmin,
	verifyUser,
	loginAdmin,
} = require("../controllers/authController");

const { getReferrerId, isSuperAdmin, isAdmin } = require("../middlewares/authMiddleware");

const { getAdminsQuerySanitizer } = require("../middlewares/sanitizer.js");

const router = require("express").Router();

router.get("/admin/list", isAdmin, getAdminsQuerySanitizer, getAdmins);
router.post("/admin/register", isAdmin, isSuperAdmin, registerAdmin);
router.post("/admin/login", loginAdmin);

router.post("/user/register", getReferrerId, registerUser);
router.get("/user/verify/:token", verifyUser);

module.exports = router;
