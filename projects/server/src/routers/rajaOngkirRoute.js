const { isUser } = require("../middlewares/authMiddleware");
const { postRajaOngkirCost } = require("../controllers/rajaOngkirController.js");
const { postRajaOngkirCostBodySanitizer } = require("../middlewares/sanitizer.js");

const router = require("express").Router();

router.post("/cost", isUser, postRajaOngkirCostBodySanitizer, postRajaOngkirCost);

module.exports = router;
