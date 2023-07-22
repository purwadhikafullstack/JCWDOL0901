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

// Update cart query isinya Carts.update yang isinya where user_id sekian , inventory_id sekian

const readCartQuery = async (query) => {
	return await Carts.findAll({
		where: { user_id: query.user_id },
		include: [
			{
				model: Inventories,
				include: [
					{ model: Branches, include: [{ model: Cities }], attributes: ["name", "id"] },
					{ model: Products },
					{
						model: Inventory_promotions,
						as: "promo",
						include: { model: Promotions },
						attributes: ["value", "id"],
					},
				],
				attributes: ["id", "stock"],
			},
		],
		attributes: ["quantity"],
	});
};
const addCartQuery = async (user_id, inventory_id, quantity) => {
	return await Carts.create({ user_id, inventory_id, quantity });
};
const updateCartQuery = async (user_id, inventory_id, quantity) => {
	return await Carts.update({ quantity }, { where: { user_id, inventory_id } });
};

const deleteCartItemQuery = async (user_id, inventory_id) => {
	return await Carts.destroy({
		where: { user_id, inventory_id },
	});
};

const deleteCartsQueryOnOrder = async (user, transaction) => {
	return await Carts.destroy({
		where: { user_id: user.id },
		transaction,
	});
};

module.exports = { readCartQuery, deleteCartsQueryOnOrder, addCartQuery, updateCartQuery, deleteCartItemQuery };
