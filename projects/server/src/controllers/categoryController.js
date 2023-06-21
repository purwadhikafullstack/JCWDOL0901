const {
	startFindCategories,
	startCreateCategory,
	startUpdateCategory,
	startDeleteCategory,
} = require("../services/categoryService");

const getCategories = async (request, response) => {
	const { filter, order, page, itemPerPage } = request.query;
	await startFindCategories(filter, order, page, Number(itemPerPage))
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

const createCategory = async (request, response) => {
	await startCreateCategory(request.body, request.file)
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

const updateCategory = async (request, response) => {
	console.log("req.body category controller: ", request.body);
	console.log("req.file category controller: ", request.file);
	console.log("req.params category controller: ", request.params);
	await startUpdateCategory(request.body, request.file, request.params)
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

const deleteCategory = async (request, response) => {
	await startDeleteCategory(request.params)
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

module.exports = { getCategories, createCategory, updateCategory, deleteCategory };
