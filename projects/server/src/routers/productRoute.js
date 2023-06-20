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
	getProductsSanitizer,
} = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductsRecommendationQuerySanitizer, getProductsRecommendation);
router.get("/related", getRelatedProductsQuerySanitizer, getRelatedProducts);
router.get("/list", getProductsSanitizer, getProducts);

router.get("/:inventory_id", getProductDetail);

module.exports = router;
