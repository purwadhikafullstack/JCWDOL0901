const { isUser } = require("../middlewares/authMiddleware");
const { postRajaOngkirCost } = require("../controllers/rajaOngkirController.js");
const router = require("express").Router();

router.post("/cost", isUser, postRajaOngkirCost);

module.exports = router;
