"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Transactions extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			Transactions.belongsTo(models.Users, { foreignKey: "user_id" });
			Transactions.belongsTo(models.Branches, {
				foreignKey: "branch_id",
			});
			Transactions.belongsTo(models.Vouchers, {
				foreignKey: "voucher_id",
			});
			Transactions.belongsTo(models.Statuses, {
				foreignKey: "status_id",
			});

			Transactions.hasMany(models.Transaction_details, {
				foreignKey: "transaction_id",
			});
			Transactions.hasOne(models.Logistics, {
				foreignKey: "transaction_id",
			});
		}
	}
	Transactions.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			branch_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			voucher_id: {
				allowNull: true,
				defaultValue: null,
				type: DataTypes.INTEGER,
			},
			amount: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			voucher_discount: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			status_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			address: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			created_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updated_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Transactions",
			timestamps: false,
		}
	);
	return Transactions;
};
