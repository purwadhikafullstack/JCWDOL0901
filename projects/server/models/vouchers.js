"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Vouchers extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Vouchers.belongsTo(models.Promotions, {
				foreignKey: "promotion_id",
			});

			Vouchers.belongsTo(models.Inventories, {
				foreignKey: "inventory_id",
			});

			Vouchers.belongsTo(models.Branches, {
				foreignKey: "branch_id",
			});

			Vouchers.belongsToMany(models.Users, {
				through: "User_vouchers",
				foreignKey: "voucher_id",
				otherKey: "user_id",
			});
		}
	}
	Vouchers.init(
		{
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			description: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			value: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			start_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			expired_at: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.DATE,
			},
			use_limit: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			promotion_id: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
			min_spend: {
				defaultValue: 0,
				type: DataTypes.INTEGER,
			},
			max_discount: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
			inventory_id: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
			branch_id: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Vouchers",
			timestamps: false,
		}
	);
	return Vouchers;
};
