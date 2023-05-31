"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Transaction_details extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Transaction_details.belongsTo(models.Transactions, {
				foreignKey: "transaction_id",
			});

			Transaction_details.belongsTo(models.Inventories, {
				foreignKey: "inventory_id",
			});

			Transaction_details.belongsTo(models.Inventory_promotions, {
				foreignKey: "inventory_promotion_id",
			});
		}
	}
	Transaction_details.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			transaction_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			inventory_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			inventory_promotion_id: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			quantity: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			price: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			branch_discount: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Transaction_details",
			timestamps: false,
		}
	);
	return Transaction_details;
};
