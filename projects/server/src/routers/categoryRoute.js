const router = require("express").Router();
const { getCategories, createCategory } = require("../controllers/categoryController");
const { upload } = require("../middlewares/multer");

router.get("/list", getCategories);
router.post("/create", upload.single("image"), createCategory);

module.exports = router;
