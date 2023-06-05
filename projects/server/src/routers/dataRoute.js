const {
	getCities,
	getProvinces,
	getCitiesInProvince,
	getCity,
} = require("../controllers/dataController");

const router = require("express").Router();

router.get("/cities/", getCities);
router.get("/city/:city_id", getCity);
router.get("/provinces", getProvinces);
router.get("/province/:province_id/cities", getCitiesInProvince);

module.exports = router;
