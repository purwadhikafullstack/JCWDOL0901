const {
	getCities,
	getProvinces,
	getCitiesInProvince,
} = require("../controllers/dataController");

const router = require("express").Router();

router.get("/cities/", getCities);
router.get("/provinces", getProvinces);
router.get("/province/:province_id/cities", getCitiesInProvince);

module.exports = router;
