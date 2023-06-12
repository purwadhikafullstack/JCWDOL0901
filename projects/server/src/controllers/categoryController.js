const { startFindCategories, startCreateCategory } = require("../services/categoryService");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const getCategories = async (request, response) => {
	await startFindCategories()
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

const createCategory = async (request, response) => {
	await startCreateCategory(request.body, request.file)
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

module.exports = { getCategories, createCategory };
