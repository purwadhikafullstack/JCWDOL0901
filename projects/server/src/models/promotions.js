"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Promotions extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Promotions.hasMany(models.Vouchers, {
				foreignKey: "promotion_id",
				sourceKey: "id",
			});

			Promotions.belongsToMany(models.Inventories, {
				through: "Inventory_promotions",
				foreignKey: "promotion_id",
				otherKey: "inventory_id",
			});
		}
	}
	Promotions.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Promotions",
			timestamps: false,
		}
	);
	return Promotions;
};
