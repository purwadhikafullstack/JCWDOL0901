const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const { join } = require("path");

// const { midnightTask } = require("./scheduler/midnight.js");
const {
	authRoute,
	addressRoute,
	dataRoute,
	adminTransactionRoute,
	categoryRoute,
	branchRoute,
	cartRoute,
	productRoute,
	adminPromoRoute,
	adminInventoryRoute,
	voucherRoute,
	transactionRoute,
	rajaOngkirRoute,
	profileRoute,
	salesReportRoute,
} = require("./routers/index.js");
const { log } = require("console");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(
	cors({
		origin: [process.env.WHITELISTED_DOMAIN && process.env.WHITELISTED_DOMAIN.split(",")],
	}),
);

app.use(express.json());

// midnightTask.start();

//#region API ROUTES

// ===========================
// NOTE : Add your routes here

app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);
app.use("/api/address", addressRoute);
app.use("/api/branch", branchRoute);
app.use("/api/category", categoryRoute);
app.use("/api/cart", cartRoute);
app.use("/api/data", dataRoute);
app.use("/api/product", productRoute);
app.use("/api/admin/transaction", adminTransactionRoute);
app.use("/api/admin/inventory", adminInventoryRoute);
app.use("/api/admin/promo", adminPromoRoute);
app.use("/api/admin/product", productRoute);
app.use("/api/admin/report", salesReportRoute);
app.use("/api/address", addressRoute);
app.use("/api/voucher", voucherRoute);
app.use("/api/transaction", transactionRoute);
app.use("/api/rajaongkir", rajaOngkirRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===========================

// not found
app.use((req, res, next) => {
	if (req.path.includes("/api/")) {
		res.status(404).send("Not found !");
	} else {
		next();
	}
});

// error
app.use((err, req, res, next) => {
	if (req.path.includes("/api/")) {
		console.error("Error : ", err);
		res.status(500).send(err);
	} else {
		next();
	}
});

//#endregion

//#region CLIENT
const clientPath = "../../client/build";
app.use(express.static(join(__dirname, clientPath)));

// Serve the HTML page
app.get("*", (req, res) => {
	res.sendFile(join(__dirname, clientPath, "index.html"));
});

//#endregion

app.listen(PORT, (err) => {
	if (err) {
		console.log(`ERROR: ${err}`);
	} else {
		console.log(`APP RUNNING at ${PORT} ✅`);
	}
});
