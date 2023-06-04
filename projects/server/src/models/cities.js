"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cities extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Cities.hasMany(models.Addresses, { foreignKey: "city_id" });
			Cities.hasMany(models.Branches, { foreignKey: "city_id" });
			Cities.belongsTo(models.Provinces, { foreignKey: "province_id" });
		}
	}
	Cities.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			province_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			type: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			postal_code: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Cities",
			timestamps: false,
		}
	);
	return Cities;
};
