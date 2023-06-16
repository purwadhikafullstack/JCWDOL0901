const router = require("express").Router();

const { getProductsRecommendation, getProducts } = require("../controllers/productController.js");
const { getProductSanitizer } = require("../middlewares/sanitizer.js");

router.get("/recommend", getProductSanitizer, getProductsRecommendation);
router.get("/list", getProductSanitizer, getProducts);

module.exports = router;
