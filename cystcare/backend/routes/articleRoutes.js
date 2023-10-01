const express = require("express");
const router = express.Router();
const Article = require("../Model/Article");

// Create a new article
router.post("/", async (req, res) => {
  try {
    const { title, content, likes, image } = req.body;
    const article = new Article({ title, content, likes, image });
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an article by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, content, likes, image } = req.body;
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content, likes, image },
      { new: true }
    );
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an article by ID
router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
