"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Branches extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			// TODO: Branches.belongsToMany Products through Inventories
			Branches.belongsToMany(models.Products, {
				through: "Inventories",
				foreignKey: "branch_id",
				otherKey: "product_id",
			});

			Branches.hasOne(models.Admins, {
				foreignKey: "id",
				sourceKey: "admin_id",
			});

			Branches.belongsTo(models.Cities, {
				foreignKey: "city_id",
			});

			Branches.hasMany(models.Vouchers, {
				foreignKey: "branch_id",
			});
		}
	}
	Branches.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			admin_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			city_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			latitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(11, 8),
			},
			longitude: {
				allowNull: false,
				type: DataTypes.DECIMAL(11, 8),
			},
		},
		{
			sequelize,
			modelName: "Branches",
			timestamps: false,
		}
	);
	return Branches;
};
