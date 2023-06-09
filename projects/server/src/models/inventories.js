"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Inventories extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Inventories.belongsToMany(models.Promotions, {
				through: "Inventory_promotions",
				foreignKey: "inventory_id",
				otherKey: "promotion_id",
			});

			Inventories.hasMany(models.Stock_changes, {
				foreignKey: "inventory_id",
				sourceKey: "id",
			});
			Inventories.belongsTo(models.Products, { foreignKey: "product_id", targetKey: "id" }); // TODO: TEST
			Inventories.belongsTo(models.Branches, { foreignKey: "branch_id" });
			Inventories.hasMany(models.Carts, { foreignKey: "inventory_id" });
			Inventories.hasMany(models.Transaction_details, {
				foreignKey: "inventory_id",
			});
			Inventories.hasMany(models.Vouchers, { foreignKey: "inventory_id" });
			Inventories.hasOne(models.Inventory_promotions, {
				foreignKey: "inventory_id",
				sourceKey: "id",
				as: "promo",
			});
		}
	}
	Inventories.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			product_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			branch_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			stock: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
		},
		{
			sequelize,
			modelName: "Inventories",
			timestamps: false,
		},
	);
	return Inventories;
};
