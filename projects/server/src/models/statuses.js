"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Statuses extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Statuses.hasMany(models.Transactions, {
				foreignKey: "status_id",
			});
		}
	}
	Statuses.init(
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Statuses",
			timestamps: false,
		}
	);
	return Statuses;
};
