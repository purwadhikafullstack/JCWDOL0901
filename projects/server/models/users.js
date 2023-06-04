"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Users.hasMany(models.Addresses, { foreignKey: "user_id" });

			Users.hasMany(models.Transactions, { foreignKey: "user_id" });

			Users.hasMany(models.User_tokens, {
				foreignKey: "user_id",
			});

			Users.hasOne(models.Profiles, { foreignKey: "user_id" });

			Users.belongsToMany(models.Vouchers, {
				through: "User_vouchers",
				foreignKey: "user_id",
				otherKey: "voucher_id",
			});

			Users.hasMany(models.User_vouchers, {
				foreignKey: "user_id",
				as: "Voucher_inventories",
			});

			Users.hasMany(models.Carts, { foreignKey: "user_id" });
		}
	}
	Users.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			email: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING,
			},
			phone: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			username: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING,
			},
			verified: {
				defaultValue: false,
				type: DataTypes.BOOLEAN,
			},
			referral_code: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.STRING,
			},
			referrer: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.STRING,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: DataTypes.DATE,
			},
			updated_at: {
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Users",
			timestamps: false,
		}
	);
	return Users;
};
