const express = require("express");
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Task Routes Working" });
});

module.exports = router;