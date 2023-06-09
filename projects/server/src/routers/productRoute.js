const router = require("express").Router();

const { getProductsRecommendation } = require("../controllers/productController.js");

router.get("/recommend", getProductsRecommendation);

module.exports = router;
