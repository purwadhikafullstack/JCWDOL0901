const {
	getCities,
	getProvinces,
	getCitiesInProvince,
	getCity,
	getBranch,
	getPromotions,
} = require("../controllers/dataController");

const { getBranchId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/cities", getCities);
router.get("/city/:city_id", getCity);
router.get("/provinces", getProvinces);
router.get("/province/:province_id/cities", getCitiesInProvince);
router.get("/promotions", getPromotions);
router.get("/branch", getBranchId, getBranch);

module.exports = router;
