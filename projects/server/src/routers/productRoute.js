const router = require("express").Router();

const {
	getProductsRecommendation,
	getRelatedProducts,
	getProductDetail,
	getProducts,
	getProductsOnly,
	updateProduct,
	createProduct,
	deleteProduct,
} = require("../controllers/productController.js");
const { isAdmin, isSuperAdmin } = require("../middlewares/authMiddleware.js");
const { uploadProductFile } = require("../middlewares/multer.js");

const {
	getProductsRecommendationQuerySanitizer,
	getRelatedProductsQuerySanitizer,
	getProductsSanitizer,
} = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductsRecommendationQuerySanitizer, getProductsRecommendation);
router.get("/related", getRelatedProductsQuerySanitizer, getRelatedProducts);
router.get("/list", getProductsSanitizer, getProducts);
router.post("/create", isAdmin, isSuperAdmin, uploadProductFile, createProduct);
router.patch("/:productId/update", isAdmin, isSuperAdmin, uploadProductFile, updateProduct);
router.delete("/:productId/delete", isAdmin, isSuperAdmin, deleteProduct);
router.get("/only", getProductsSanitizer, getProductsOnly);

router.get("/:inventory_id", getProductDetail);

module.exports = router;
