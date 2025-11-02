const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

router.post("/", async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json({ message: "Problem reported!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save report." });
  }
});

module.exports = router;
