const {
  registerUser,
  getAdmins,
  registerAdmin,
  verifyUser,
  loginAdmin,
  loginUser,
} = require("../controllers/authController");
const {
  getReferrerId,
  getAdminsQueryParamsSanitizer,
  isSuperAdmin,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/admin/list", getAdminsQueryParamsSanitizer, getAdmins);
router.post("/admin/register", isSuperAdmin, registerAdmin);
router.post("/admin/login", loginAdmin);

router.post("/user/login", loginUser);
router.post("/user/register", getReferrerId, registerUser);
router.get("/user/verify/:token", verifyUser);

module.exports = router;
