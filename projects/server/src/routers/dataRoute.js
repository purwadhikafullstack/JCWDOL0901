const {
	getCities,
	getProvinces,
	getCitiesInProvince,
	getCity,
	getBranch,
	getPromotions,
} = require("../controllers/dataController");

const { isAdmin, getBranchId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/cities", getCities);
router.get("/city/:city_id", getCity);
router.get("/provinces", getProvinces);
router.get("/province/:province_id/cities", getCitiesInProvince);
router.get("/promotions", getPromotions);
router.get("/branch", isAdmin, getBranchId, getBranch);

module.exports = router;
