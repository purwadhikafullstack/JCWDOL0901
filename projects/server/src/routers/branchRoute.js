const router = require("express").Router();
const { postNearestBranch, getBranches } = require("../controllers/branchController");
const { postNearestBranchBodySanitizer } = require("../middlewares/sanitizer.js");

router.post("/nearest", postNearestBranchBodySanitizer, postNearestBranch);
router.get("/list", getBranches);

module.exports = router;
