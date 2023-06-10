const router = require("express").Router();
const { postNearestBranch, getBranches } = require("../controllers/branchController");
const { sanitizePostNearestBranch } = require("../middlewares/bodySanitizer");

router.post("/nearest", sanitizePostNearestBranch, postNearestBranch);
router.get("/list", getBranches);

module.exports = router;
