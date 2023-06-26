const {
	getCities,
	getProvinces,
	getCitiesInProvince,
	getCity,
	getBranch,
	getPromotions,
	getStatuses,
} = require("../controllers/dataController");

const { getBranchId, isAdmin } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/cities", getCities);
router.get("/city/:city_id", getCity);
router.get("/provinces", getProvinces);
router.get("/province/:province_id/cities", getCitiesInProvince);
router.get("/promotions", getPromotions);
router.get("/branch", isAdmin, getBranchId, getBranch);
router.get("/statuses", getStatuses);
module.exports = router;
