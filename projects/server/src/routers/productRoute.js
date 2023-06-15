const router = require("express").Router();

const { getProductsRecommendation, getProductDetail } = require("../controllers/productController.js");

router.get("/recommend", getProductsRecommendation);
router.get("/:inventory_id", getProductDetail);

module.exports = router;
