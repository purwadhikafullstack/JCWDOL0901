const {
	registerUser,
	getAdmins,
	registerAdmin,
	verifyUser,
} = require("../controllers/authController");
const {
	getReferrerId,
	getAdminsQueryParamsSanitizer,
	isSuperAdmin,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/admin/list", getAdminsQueryParamsSanitizer, getAdmins);
router.post("/admin/register", isSuperAdmin, registerAdmin);

router.post("/user/register", getReferrerId, registerUser);
router.get("/user/verify/:token", verifyUser);

module.exports = router;
