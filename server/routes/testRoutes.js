const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

// POST /api/test
router.post("/test", testController);

module.exports = router;
