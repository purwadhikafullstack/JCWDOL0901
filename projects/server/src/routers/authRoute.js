const { registerUser, getAdmins } = require("../controllers/authController");
const {
	getReferrerId,
	getAdminsQueryParamsSanitizer,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/admin/list", getAdminsQueryParamsSanitizer, getAdmins);

router.post("/user/register", getReferrerId, registerUser);

module.exports = router;
