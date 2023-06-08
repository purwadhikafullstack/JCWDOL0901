const router = require("express").Router();
const { postNearestBranch } = require("../controllers/branchController");
const { sanitizePostNearestBranch } = require("../middlewares/bodySanitizer");

router.post("/nearest", sanitizePostNearestBranch, postNearestBranch);

module.exports = router;
