const { Inventories, Products } = require("../models/index.js");
const { Op, Sequelize, literal, Transaction } = require("sequelize");
const { readProductsQuery } = require("./Products.js");

const readInventoriesQuery = async (branch_id, name, filter, order, page) => {
	// TODO: Implement Item Per Page and Put in Offset and Limit
	return Inventories.findAndCountAll({
		where: { branch_id },
		include: {
			model: Products,
			where: { ...filter?.Products, name: { [Op.like]: `%${name}%` } },
		},
		attributes: {
			include: [[Sequelize.col("Product.name"), "name"]],
		},
		offset: page ? (page - 1) * 3 : null,
		limit: page ? 3 : null,
		order: [...order?.Products, ...order?.Inventories],
	});
};

const createInventoryQueryForNewBranch = async (Branch, transaction) => {
	const Product = await readProductsQuery();

	return Branch.addProducts(Product.rows, { transaction });
};

const updateInventoriesQuery = async (inventory_id, stock, transaction) => {
	const Inventory = await Inventories.findOne({ where: { id: inventory_id } });
	const previousStock = Inventory.stock;

	await Inventory.update({ stock }, { where: { id: inventory_id }, transaction });
	return { Inventory, previousStock };
};

const decrementInventoriesStockQuery = async (transaction_detail, transaction) => {
	await transaction_detail.forEach(async (item) => {
		await Inventories.decrement("stock", { by: item.quantity, where: { id: item.inventory_id }, transaction });
	});
};

const incrementInventoriesStockQuery = async (transaction_detail, transaction) => {
	await transaction_detail.forEach(async (item) => {
		await Inventories.increment("stock", { by: item.quantity, where: { id: item.inventory_id }, transaction });
	});
};

const readInventoryQuery = async (inventory_id, transaction) => {
	return Inventories.findOne({ where: { id: inventory_id } });
};

module.exports = {
	readInventoriesQuery,
	createInventoryQueryForNewBranch,
	updateInventoriesQuery,
	decrementInventoriesStockQuery,
	incrementInventoriesStockQuery,
	readInventoryQuery,
};
