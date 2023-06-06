"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Admins extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Admins.hasOne(models.Branches, {
				foreignKey: "admin_id",
				sourceKey: "id",
			});
		}
	}
	Admins.init(
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
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			super: {
				defaultValue: false,
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: "Admins",
			timestamps: false,
		}
	);
	return Admins;
};
