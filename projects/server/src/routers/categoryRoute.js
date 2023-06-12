const router = require("express").Router();
const {
	getCategories,
	createCategory,
	updateCategory,
} = require("../controllers/categoryController");
const { upload } = require("../middlewares/multer");

router.get("/list", getCategories);
router.post("/create", upload.single("image"), createCategory);
router.patch("/update", upload.single("image"), updateCategory);

module.exports = router;
