"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Logistics extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Logistics.hasOne(models.Transactions, {
				foreignKey: "id",
			});
		}
	}
	Logistics.init(
		{
			transaction_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			code: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			service: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			shipping_cost: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Logistics",
			timestamps: false,
		}
	);
	return Logistics;
};
