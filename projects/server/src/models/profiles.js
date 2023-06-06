"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Profiles extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Profiles.hasOne(models.Users, { foreignKey: "id" });
		}
	}
	Profiles.init(
		{
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			gender: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.STRING,
			},
			birth: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.DATEONLY,
			},
			avatar: {
				defaultValue: "/avatar/default_avatar.jpg",
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Profiles",
			timestamps: false,
		}
	);
	return Profiles;
};
