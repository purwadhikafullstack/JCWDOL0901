const {
	getInventoryPromotion,
	postInventoryPromotion,
	patchInventoryPromotion,
} = require("../controllers/promoController.js");
const {
	sanitizePostInventoryPromotion,
	sanitizePatchInventoryPromotion,
} = require("../middlewares/bodySanitizer.js");

const router = require("express").Router();

// @TODO: jwtoken middleware checker
router.get("/list", getInventoryPromotion);
router.post("/create", sanitizePostInventoryPromotion, postInventoryPromotion);
router.patch("/update", sanitizePatchInventoryPromotion, patchInventoryPromotion);

module.exports = router;
