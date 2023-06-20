"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Addresses extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Addresses.belongsTo(models.Users, {
				foreignKey: "user_id",
			});

			Addresses.belongsTo(models.Cities, { foreignKey: "city_id" });
		}
	}
	Addresses.init(
		{
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER,
			},
			user_id: {
				allowNull: false,
				unique: false,
				type: DataTypes.INTEGER,
			},
			city_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			label: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			address: {
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
			default: {
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: "Addresses",
			timestamps: false,
		},
	);
	return Addresses;
};
