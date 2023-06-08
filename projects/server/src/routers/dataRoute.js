const {
	getCities,
	getProvinces,
	getCitiesInProvince,
	getCity,
	getBranch,
} = require("../controllers/dataController");
const { getBranchId } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/cities", getCities);
router.get("/city/:city_id", getCity);
router.get("/provinces", getProvinces);
router.get("/province/:province_id/cities", getCitiesInProvince);
router.get("/branch", getBranchId, getBranch);

module.exports = router;
