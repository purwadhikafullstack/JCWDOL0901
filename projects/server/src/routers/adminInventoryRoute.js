const { isAdmin, getBranchId } = require("../middlewares/authMiddleware.js");
const { getInventories, patchInventories, getStockChanges } = require("../controllers/adminInventoryController.js");
const { getInventoriesQuerySanitizer, getStockChangesQuerySanitizer } = require("../middlewares/sanitizer.js");
const router = require("express").Router();

router.get("/list", isAdmin, getBranchId, getInventoriesQuerySanitizer, getInventories);
router.get("/history", isAdmin, getBranchId, getStockChangesQuerySanitizer, getStockChanges);

// NICHE: Validate if inventory_id belongs to admin id
router.patch("/:inventory_id/update", isAdmin, patchInventories);
module.exports = router;
