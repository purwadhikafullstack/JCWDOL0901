"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint("Profiles", {
			fields: ["user_id"],
			type: "foreign key",
			name: "FK_Profiles-Users",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("User_tokens", {
			fields: ["user_id"],
			type: "foreign key",
			name: "FK_User_tokens-Users",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Addresses", {
			fields: ["user_id"],
			type: "foreign key",
			name: "FK_Addresses-Users",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Cities", {
			fields: ["province_id"],
			type: "foreign key",
			name: "FK_Cities-Provinces",
			references: {
				table: "Provinces",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Addresses", {
			fields: ["city_id"],
			type: "foreign key",
			name: "FK_Addresses-Cities",
			references: {
				table: "Cities",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("User_vouchers", {
			fields: ["user_id"],
			type: "foreign key",
			name: "FK_User_vouchers-Users",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("User_vouchers", {
			fields: ["voucher_id"],
			type: "foreign key",
			name: "FK_User_vouchers-Vouchers",
			references: {
				table: "Vouchers",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Branches", {
			fields: ["city_id"],
			type: "foreign key",
			name: "FK_Branches-Cities",
			references: {
				table: "Cities",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Branches", {
			fields: ["admin_id"],
			type: "foreign key",
			name: "FK_Branches-Admins",
			references: {
				table: "Admins",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Products", {
			fields: ["category_id"],
			type: "foreign key",
			name: "FK_Products-Categories",
			references: {
				table: "Categories",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Stock_changes", {
			fields: ["inventory_id"],
			type: "foreign key",
			name: "FK_Stock_changes-Inventories",
			references: {
				table: "Inventories",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Logistics", {
			fields: ["transaction_id"],
			type: "foreign key",
			name: "FK_Logistics-Transactions",
			references: {
				table: "Transactions",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transactions", {
			fields: ["user_id"],
			type: "foreign key",
			name: "FK_Transactions-Users",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transactions", {
			fields: ["branch_id"],
			type: "foreign key",
			name: "FK_Transactions-Branches",
			references: {
				table: "Branches",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transactions", {
			fields: ["voucher_id"],
			type: "foreign key",
			name: "FK_Transactions-Vouchers",
			references: {
				table: "Vouchers",
				field: "id",
			},
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transactions", {
			fields: ["status_id"],
			type: "foreign key",
			name: "FK_Transactions-Statuses",
			references: {
				table: "Statuses",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Carts", {
			fields: ["user_id"],
			type: "foreign key",
			name: "FK_Carts-Users",
			references: {
				table: "Users",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Carts", {
			fields: ["inventory_id"],
			type: "foreign key",
			name: "FK_Carts-Inventories",
			references: {
				table: "Inventories",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transaction_details", {
			fields: ["transaction_id"],
			type: "foreign key",
			name: "FK_Transaction_details-Transactions",
			references: {
				table: "Transactions",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transaction_details", {
			fields: ["inventory_id"],
			type: "foreign key",
			name: "FK_Transaction_details-Inventories",
			references: {
				table: "Inventories",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Transaction_details", {
			fields: ["inventory_promotion_id"],
			type: "foreign key",
			name: "FK_Transaction_details-Inventory_promotions",
			references: {
				table: "Inventory_promotions",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Inventories", {
			fields: ["product_id"],
			type: "foreign key",
			name: "FK_Inventories-Products",
			references: {
				table: "Products",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Inventories", {
			fields: ["branch_id"],
			type: "foreign key",
			name: "FK_Inventories-Branches",
			references: {
				table: "Branches",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Inventory_promotions", {
			fields: ["inventory_id"],
			type: "foreign key",
			name: "FK_Inventory_promotions-Inventories",
			references: {
				table: "Inventories",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Inventory_promotions", {
			fields: ["promotion_id"],
			type: "foreign key",
			name: "FK_Inventory_promotions-Promotions",
			references: {
				table: "Promotions",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Vouchers", {
			fields: ["promotion_id"],
			type: "foreign key",
			name: "FK_Vouchers-Promotions",
			references: {
				table: "Promotions",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Vouchers", {
			fields: ["inventory_id"],
			type: "foreign key",
			name: "FK_Vouchers-Inventories",
			references: {
				table: "Inventories",
				field: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		await queryInterface.addConstraint("Proofs", {
			fields: ["transaction_id"],
			type: "foreign key",
			name: "FK_Proofs-Transactions",
			references: {
				table: "Transactions",
				field: "id",
			},
			onDelete: "RESTRICT",
			onUpdate: "CASCADE",
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint("Profiles", "FK_Profiles-Users");
		await queryInterface.removeConstraint("User_tokens", "FK_User_tokens-Users");
		await queryInterface.removeConstraint("Addresses", "FK_Addresses-Users");
		await queryInterface.removeConstraint("Cities", "FK_Cities-Provinces");
		await queryInterface.removeConstraint("Addresses", "FK_Addresses-Cities");
		await queryInterface.removeConstraint("User_vouchers", "FK_User_vouchers-Users");
		await queryInterface.removeConstraint("User_vouchers", "FK_User_vouchers-Vouchers");
		await queryInterface.removeConstraint("Branches", "FK_Branches-Cities");
		await queryInterface.removeConstraint("Branches", "FK_Branches-Admins");
		await queryInterface.removeConstraint("Products", "FK_Products-Categories");
		await queryInterface.removeConstraint("Stock_changes", "FK_Stock_changes-Inventories");
		await queryInterface.removeConstraint("Logistics", "FK_Logistics-Transactions");
		await queryInterface.removeConstraint("Transactions", "FK_Transactions-Users");
		await queryInterface.removeConstraint("Transactions", "FK_Transactions-Branches");
		await queryInterface.removeConstraint("Transactions", "FK_Transactions-Vouchers");
		await queryInterface.removeConstraint("Transactions", "FK_Transactions-Statuses");
		await queryInterface.removeConstraint("Carts", "FK_Carts-Users");
		await queryInterface.removeConstraint("Carts", "FK_Carts-Inventories");
		await queryInterface.removeConstraint("Transaction_details", "FK_Transaction_details-Transactions");
		await queryInterface.removeConstraint("Transaction_details", "FK_Transaction_details-Inventories");
		await queryInterface.removeConstraint("Transaction_details", "FK_Transaction_details-Inventory_promotions");
		await queryInterface.removeConstraint("Inventories", "FK_Inventories-Products");
		await queryInterface.removeConstraint("Inventories", "FK_Inventories-Branches");
		await queryInterface.removeConstraint("Inventory_promotions", "FK_Inventory_promotions-Inventories");
		await queryInterface.removeConstraint("Inventory_promotions", "FK_Inventory_promotions-Promotions");
		await queryInterface.removeConstraint("Vouchers", "FK_Vouchers-Promotions");
		await queryInterface.removeConstraint("Vouchers", "FK_Vouchers-Inventories");
		await queryInterface.removeConstraint("Proofs", "FK_Proofs-Transactions");
	},
};
