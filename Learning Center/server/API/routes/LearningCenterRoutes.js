import express from 'express';
import LearningModel from '../models/LearningModel.js';

const router = express.Router();

// Create a new article
router.post('/articles', async (req, res) => {
  try {
    const article = new LearningModel(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all articles with optional search
router.get('/articles', async (req, res) => {
  try {
    const searchQuery = req.query.search || '';
    const articles = await LearningModel.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { content: { $regex: searchQuery, $options: 'i' } },
        { category: { $regex: searchQuery, $options: 'i' } }
      ]
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get article by ID
router.get('/articles/:id', async (req, res) => {
  try {
    const article = await LearningModel.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update article by ID
router.put('/articles/:id', async (req, res) => {
  try {
    const updatedArticle = await LearningModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
    res.json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete article by ID
router.delete('/articles/:id', async (req, res) => {
  try {
    const deletedArticle = await LearningModel.findByIdAndDelete(req.params.id);
    if (!deletedArticle) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
