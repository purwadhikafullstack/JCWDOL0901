const multer = require("multer");

const categoryStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, "uploads/category");
	},
	filename: (req, file, cb) => {
		cb(null, "category_" + Date.now() + Math.round(Math.random() * 1000000000) + "." + file.mimetype.split("/")[1]);
	},
});

const avatarStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, `${__dirname}../../../../client/public/assets/avatars`);
	},
	filename: (req, file, cb) => {
		cb(null, "avatar_" + Date.now() + Math.round(Math.random() * 1000000000) + "." + file.mimetype.split("/")[1]);
	},
});

const fileFilter = (req, file, cb) => {
	const fileType = file.mimetype.split("/")[1];
	if (fileType === "png" || fileType === "jpg" || fileType === "jpeg" || fileType === "gif") {
		cb(null, true);
	} else {
		cb("File type not allowed", false);
	}
};

const limits = {
	fileSize: 1024 * 1024,
};

const uploadCategoryFile = multer({ storage: categoryStorage, fileFilter, limits }).single("image");

const uploadAvatarFile = multer({ storage: avatarStorage, fileFilter, limits }).single("avatar");

module.exports = { uploadCategoryFile, uploadAvatarFile };
