const router = require("express").Router();

const {
	getProductsRecommendation,
	getRelatedProducts,
	getProductDetail,
<<<<<<< HEAD
=======
	getProducts,
	getProductsOnly,
>>>>>>> development
} = require("../controllers/productController.js");

const {
	getProductsRecommendationQuerySanitizer,
	getRelatedProductsQuerySanitizer,
<<<<<<< HEAD
=======
	getProductsSanitizer,
>>>>>>> development
} = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductsRecommendationQuerySanitizer, getProductsRecommendation);
router.get("/related", getRelatedProductsQuerySanitizer, getRelatedProducts);
<<<<<<< HEAD
=======
router.get("/list", getProductsSanitizer, getProducts);
router.get("/only", getProductsSanitizer, getProductsOnly);

>>>>>>> development
router.get("/:inventory_id", getProductDetail);

module.exports = router;
