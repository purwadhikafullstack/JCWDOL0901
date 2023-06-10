const {
	startFindInventoryPromotion,
	startInventoryPromotionRegistration,
	startInventoryPromotionUpdate,
} = require("../services/promoService.js");

const getInventoryPromotion = async (request, response) => {
	await startFindInventoryPromotion()
		.then(result => response.status(200).send(result))
		.catch(error => response.status(error.code).send(error.message));
};

const postInventoryPromotion = async (request, response) => {
	await startInventoryPromotionRegistration(request.payload)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const patchInventoryPromotion = async (request, response) => {
	await startInventoryPromotionUpdate(request.payload, request.id)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error);
		});
};

module.exports = { postInventoryPromotion, patchInventoryPromotion, getInventoryPromotion };
