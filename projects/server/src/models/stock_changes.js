"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Stock_changes extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Stock_changes.belongsTo(models.Inventories, {
				foreignKey: "inventory_id",
				targetKey: "id",
			});
		}
	}
	Stock_changes.init(
		{
			id: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			inventory_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			stock_before: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			stock_after: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Stock_changes",
			timestamps: false,
		},
	);
	return Stock_changes;
};
