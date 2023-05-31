"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			// TODO: Products.belongsToMany Branches through Inventories
			Products.belongsToMany(models.Branches, {
				through: "Inventories",
				foreignKey: "product_id",
				otherKey: "branch_id",
			});

			Products.belongsTo(models.Categories, {
				foreignKey: "category_id",
			});
		}
	}
	Products.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			image: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			price: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			description: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			weight: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			unit: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			category_id: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
			active: {
				defaultValue: false,
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: "Products",
			timestamps: false,
		}
	);
	return Products;
};
