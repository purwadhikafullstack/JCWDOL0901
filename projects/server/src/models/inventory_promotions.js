"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Inventory_promotions extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Inventory_promotions.belongsTo(models.Promotions, {
				foreignKey: "promotion_id",
			});

			Inventory_promotions.belongsTo(models.Inventories, {
				foreignKey: "inventory_id",
				targetKey: "id",
			});
		}
	}
	Inventory_promotions.init(
		{
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER,
			},
			inventory_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			value: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			start_at: {
				allowNull: false,
				type: DataTypes.DATEONLY,
			},
			expired_at: {
				allowNull: false,
				type: DataTypes.DATEONLY,
			},
			promotion_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Inventory_promotions",
			timestamps: false,
		},
	);
	return Inventory_promotions;
};
