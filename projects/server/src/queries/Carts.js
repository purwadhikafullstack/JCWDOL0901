const {
	Users,
	Branches,
	Carts,
	Cities,
	Inventories,
	Inventory_promotions,
	Promotions,
	Products,
} = require("../models/index.js");

const readCartQuery = async (query) => {
	return await Carts.findAll({
		where: { user_id: query.user_id },
		include: [
			{
				model: Inventories,
				include: [
					{ model: Branches, include: [{ model: Cities }], attributes: ["name", "id"] },
					{ model: Products },
					{ model: Inventory_promotions, as: "promo", include: { model: Promotions }, attributes: ["value"] },
				],
				attributes: ["id", "stock"],
			},
		],
		attributes: ["quantity"],
	});
};
const addCartQuery = async (userProduct) => {
	console.log("addCartQuery user_id: ", userProduct.userData.id);
	console.log("addCartQuery inventory_id: ", userProduct.body.Inventories[0].id);
	const user_id = userProduct.userData.id;
	const inventory_id = userProduct.body.Inventories[0].id;
	return await Carts.create({user_id: user_id, inventory_id: inventory_id, quantity: 1 })
};

const deleteCartsQueryOnOrder = async (user, transaction) => {
	return await Carts.destroy({
		where: { user_id: user.id },
	});
};

module.exports = { readCartQuery, deleteCartsQueryOnOrder, addCartQuery };
