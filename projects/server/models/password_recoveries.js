"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Password_recoveries extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Password_recoveries.hasOne(models.Users, {
				foreignKey: "id",
				sourceKey: "user_id",
			});
		}
	}
	Password_recoveries.init(
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
			modelName: "Password_recoveries",
			timestamps: false,
		}
	);
	return Password_recoveries;
};
