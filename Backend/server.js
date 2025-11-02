const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();                                   

const Contact = require("./models/Contact");
const Report = require("./models/Report");

const app = express();
app.use(cors());
app.use(express.json()); // ✅ This alone is enough — remove body-parser completely

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/communityDB";
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}
main();

// Routes
app.get("/report", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reports" });
  }
});

app.post("/report", async (req, res) => {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res.json({ message: "Report created", newReport });
  } catch (err) {
    res.status(500).json({ error: "Failed to save report" });
  }
});
// Existing routes for report
app.get("/report", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reports" });
  }
});

app.post("/report", async (req, res) => {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res.json({ message: "Report created", newReport });
  } catch (err) {
    res.status(500).json({ error: "Failed to save report" });
  }
});

// New routes for contact

// GET /contact - Fetch all contact messages
app.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
});

// POST /contact - Save a new contact message
app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body); // Using the Contact schema
    await newContact.save();
    res.json({ message: "Contact message saved", newContact });
  } catch (err) {
    res.status(500).json({ error: "Failed to save contact message" });
  }
});
