const router = require("express").Router();
const {
	getCategories,
	createCategory,
	updateCategory,
	deleteCategory,
} = require("../controllers/categoryController");
const { isAdmin, isSuperAdmin } = require("../middlewares/authMiddleware");
const { uploadFile } = require("../middlewares/multer");
const { getCategorySanitizer } = require("../middlewares/sanitizer.js");

router.get("/list", getCategorySanitizer, getCategories);
router.post("/create", isAdmin, isSuperAdmin, uploadFile, createCategory);
router.patch("/:categoryId/update", isAdmin, isSuperAdmin, uploadFile, updateCategory);
router.delete("/:categoryId/delete", isAdmin, isSuperAdmin, deleteCategory);

module.exports = router;
