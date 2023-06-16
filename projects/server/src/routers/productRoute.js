const router = require("express").Router();

const {
	getProductsRecommendation,
	getRelatedProducts,
	getProductDetail,
} = require("../controllers/productController.js");

const {
	getProductsRecommendationQuerySanitizer,
	getRelatedProductsQuerySanitizer,
} = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductsRecommendationQuerySanitizer, getProductsRecommendation);
router.get("/related", getRelatedProductsQuerySanitizer, getRelatedProducts);
router.get("/:inventory_id", getProductDetail);

module.exports = router;
