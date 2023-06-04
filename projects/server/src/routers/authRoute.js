const { registerUser } = require("../controllers/authController");
const { getReferrerId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/user/register", getReferrerId, registerUser);

module.exports = router;
