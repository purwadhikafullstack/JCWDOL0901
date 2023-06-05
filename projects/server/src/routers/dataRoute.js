const { getCities } = require("../controllers/dataController");

const router = require("express").Router();

router.get("/cities", getCities);

module.exports = router;
