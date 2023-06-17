const router = require("express").Router();

const {
	getProductsRecommendation,
	getRelatedProducts,
	getProductDetail,
	getProducts,
} = require("../controllers/productController.js");

const {
	getProductsRecommendationQuerySanitizer,
	getRelatedProductsQuerySanitizer,
	getProductSanitizer,
} = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductsRecommendationQuerySanitizer, getProductsRecommendation);
router.get("/related", getRelatedProductsQuerySanitizer, getRelatedProducts);
router.get("/:inventory_id", getProductDetail);
router.get("/list", getProductSanitizer, getProducts);

module.exports = router;
