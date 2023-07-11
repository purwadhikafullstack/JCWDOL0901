const {
	getInventoryPromotion,
	postInventoryPromotion,
	patchInventoryPromotion,
} = require("../controllers/promoController.js");

const { isAdmin, getBranchId } = require("../middlewares/authMiddleware.js");

const {
	getInventoryPromotionQuerySanitizer,
	postInventoryPromotionBodySanitizer,
	patchInventoryPromotionBodySanitizer,
} = require("../middlewares/sanitizer.js");

const router = require("express").Router();

router.get(
	"/list",
	isAdmin,
	getBranchId,
	getInventoryPromotionQuerySanitizer,
	getInventoryPromotion
);
router.post("/create", isAdmin, postInventoryPromotionBodySanitizer, postInventoryPromotion);
router.patch("/update", isAdmin, patchInventoryPromotionBodySanitizer, patchInventoryPromotion);

module.exports = router;
