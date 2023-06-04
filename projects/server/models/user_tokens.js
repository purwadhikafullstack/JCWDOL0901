"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User_tokens extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User_tokens.belongsTo(models.Users, {
				foreignKey: "id",
				sourceKey: "user_id",
			});
		}
	}
	User_tokens.init(
		{
			id: {
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: DataTypes.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			token: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			action: {
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
			modelName: "User_tokens",
			timestamps: false,
		}
	);
	return User_tokens;
};
