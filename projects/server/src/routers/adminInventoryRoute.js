const { isAdmin, getBranchId } = require("../middlewares/authMiddleware");
const { getInventories } = require("../controllers/adminInventoryController.js");
const { getInventoriesQuerySanitizer } = require("../middlewares/sanitizer");
const router = require("express").Router();

router.get("/list", isAdmin, getBranchId, getInventoriesQuerySanitizer, getInventories);

module.exports = router;
