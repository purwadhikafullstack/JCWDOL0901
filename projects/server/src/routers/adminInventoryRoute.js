const { isAdmin, getBranchId } = require("../middlewares/authMiddleware.js");
const { getInventories, patchInventories } = require("../controllers/adminInventoryController.js");
const { getInventoriesQuerySanitizer } = require("../middlewares/sanitizer.js");
const router = require("express").Router();

router.get("/list", isAdmin, getBranchId, getInventoriesQuerySanitizer, getInventories);

// NICHE: Validate if inventory_id belongs to admin id
router.patch("/:inventory_id/update", isAdmin, patchInventories);
module.exports = router;
