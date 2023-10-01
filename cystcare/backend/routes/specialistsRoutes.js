const express = require("express");
const router = express.Router();
const Specialist = require("../Model/Specialists");

// Get all specialists
router.get("/", async (req, res) => {
  try {
    const specialists = await Specialist.find();
    res.json(specialists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific specialist by ID
router.get("/:id", async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.params.id);
    if (!specialist) {
      return res.status(404).json({ error: "Specialist not found" });
    }
    res.json(specialist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new specialist
router.post("/", async (req, res) => {
  try {
    const specialist = new Specialist(req.body);
    await specialist.save();
    res.status(201).json(specialist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a specialist by ID
router.put("/:id", async (req, res) => {
  try {
    const specialist = await Specialist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!specialist) {
      return res.status(404).json({ error: "Specialist not found" });
    }
    res.json(specialist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a specialist by ID
router.delete("/:id", async (req, res) => {
  try {
    const specialist = await Specialist.findByIdAndDelete(req.params.id);
    if (!specialist) {
      return res.status(404).json({ error: "Specialist not found" });
    }
    res.json({ message: "Specialist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
