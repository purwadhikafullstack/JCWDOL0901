const router = require("express").Router();

const {
	getProductsRecommendation,
	getRelatedProducts,
	getProductDetail,
	getProducts,
} = require("../controllers/productController.js");
const { isAdmin } = require("../middlewares/authMiddleware.js");
const { uploadCategoryFile } = require("../middlewares/multer.js");

const {
	getProductsRecommendationQuerySanitizer,
	getRelatedProductsQuerySanitizer,
	getProductsSanitizer,
} = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductsRecommendationQuerySanitizer, getProductsRecommendation);
router.get("/related", getRelatedProductsQuerySanitizer, getRelatedProducts);
router.get("/list", getProductsSanitizer, getProducts);
router.post("/create", isAdmin, uploadCategoryFile)
router.patch("/:productId/update", isAdmin, uploadCategoryFile)
router.delete("/:productId/delete", isAdmin)

router.get("/:inventory_id", getProductDetail);

module.exports = router;
