const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// PROTECTED ROUTE
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user,
  });
});

module.exports = router;
