const router = require("express").Router();
const { getCategories } = require("../controllers/categoryController");

router.get("/list", getCategories);

module.exports = router;
