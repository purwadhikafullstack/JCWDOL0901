const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, "uploads/category");
	},
	filename: (req, file, cb) => {
		cb(
			null,
			"category_" +
				Date.now() +
				Math.round(Math.random() * 1000000000) +
				"." +
				file.mimetype.split("/")[1]
		);
	},
});

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.split('/')[1] === 'pdf') {
//         cb(null, true);
//     } else {
//         cb('File type not allowed', false);
//     }
// };

const upload = multer({ storage });

module.exports = { upload };
