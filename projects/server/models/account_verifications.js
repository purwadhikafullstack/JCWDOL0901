"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Account_verifications extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Account_verifications.hasOne(models.Users, {
				foreignKey: "id",
				sourceKey: "user_id",
			});
		}
	}
	Account_verifications.init(
		{
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: DataTypes.INTEGER,
			},
			token: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			created_at: {
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Account_verifications",
			timestamps: false,
		}
	);
	return Account_verifications;
};
