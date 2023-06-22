"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Proofs extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Proofs.hasOne(models.Transactions, { foreignKey: "id", sourceKey: "transaction_id" });
		}
	}
	Proofs.init(
		{
			transaction_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			image: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Proofs",
			timestamps: false,
		},
	);
	return Proofs;
};
