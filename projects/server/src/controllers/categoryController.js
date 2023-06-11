const { startFindCategories, startCreateCategory } = require("../services/categoryService");

const getCategories = async (request, response) => {
	await startFindCategories()
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

const createCategory = async (request, response) => {
	await startCreateCategory(request.body)
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

module.exports = { getCategories, createCategory };
