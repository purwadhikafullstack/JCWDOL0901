const multer = require("multer");

const productStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, `uploads/products`);
	},
	filename: (req, file, cb) => {
		cb(null, "product_" + Date.now() + Math.round(Math.random() * 1000000000) + "." + file.mimetype.split("/")[1]);
	},
});

const categoryStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, `uploads/categories`);
	},
	filename: (req, file, cb) => {
		cb(null, "category_" + Date.now() + Math.round(Math.random() * 1000000000) + "." + file.mimetype.split("/")[1]);
	},
});

const avatarStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, `uploads/avatars`);
	},
	filename: (req, file, cb) => {
		cb(null, "avatar_" + Date.now() + Math.round(Math.random() * 1000000000) + "." + file.mimetype.split("/")[1]);
	},
});

const proofStorage = multer.diskStorage({
	destination: (request, response, callback) => {
		callback(null, `uploads/payment_proofs/`);
	},
	filename: (request, file, callback) => {
		callback(
			null,
			Date.now() + "_proof_transaction_" + request.body.transaction_id + "." + file.mimetype.split("/")[1],
		);
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

const uploadProductFile = multer({ storage: productStorage, fileFilter, limits }).single("image");

const uploadCategoryFile = multer({ storage: categoryStorage, fileFilter, limits }).single("image");

const uploadAvatarFile = multer({ storage: avatarStorage, fileFilter, limits }).single("avatar");

const uploadProofFile = multer({ storage: proofStorage, fileFilter, limits }).single("proof");

module.exports = { uploadProductFile, uploadCategoryFile, uploadAvatarFile, uploadProofFile };
