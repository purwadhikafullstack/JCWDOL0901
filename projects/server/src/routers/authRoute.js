const { registerUser, verifyUser } = require("../controllers/authController");

const { getReferrerId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/user/register", getReferrerId, registerUser);
router.get("/user/verify/:token", verifyUser);

module.exports = router;
