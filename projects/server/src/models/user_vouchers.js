"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User_vouchers extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User_vouchers.belongsTo(models.Users, {
				foreignKey: "user_id",
			});

			User_vouchers.belongsTo(models.Vouchers, {
				foreignKey: "voucher_id",
			});
		}
	}
	User_vouchers.init(
		{
			id: {
				autoIncrement: true,
				unique: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			voucher_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			isUsed: {
				defaultValue: false,
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: "User_vouchers",
			timestamps: false,
		}
	);
	return User_vouchers;
};
