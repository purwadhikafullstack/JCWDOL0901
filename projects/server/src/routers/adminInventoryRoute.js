const { isAdmin, getBranchId } = require("../middlewares/authMiddleware");
const { getInventories } = require("../controllers/adminInventoryController.js");
const router = require("express").Router();

router.get("/list", isAdmin, getBranchId, getInventories);

module.exports = router;
