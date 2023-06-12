const router = require("express").Router();
const {
	getCategories,
	createCategory,
	updateCategory,
} = require("../controllers/categoryController");
const { uploadFile } = require("../middlewares/multer");

router.get("/list", getCategories);
router.post("/create", uploadFile, createCategory);
router.patch("/update", uploadFile, updateCategory);

module.exports = router;
