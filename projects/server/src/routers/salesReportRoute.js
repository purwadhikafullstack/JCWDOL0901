const { isAdmin, isSuperAdmin } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/product", isAdmin, isSuperAdmin);
router.get("/transaction", isAdmin, isSuperAdmin);
router.get("/user", isAdmin, isSuperAdmin);

module.exports = router;
