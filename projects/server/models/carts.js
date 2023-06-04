"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Carts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Carts.belongsTo(models.Users, { foreignKey: "user_id" });
			Carts.belongsTo(models.Inventories, { foreignKey: "inventory_id" });
		}
	}
	Carts.init(
		{
			user_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			inventory_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			quantity: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Carts",
			timestamps: false,
		}
	);
	return Carts;
};
