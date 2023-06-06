const {
	registerUser,
	getAdmins,
	registerAdmin,
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

module.exports = router;
