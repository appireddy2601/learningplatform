const express = require('express');
const Progress = require('../models/Progress');
const router = express.Router();

// Get progress by userId and courseId
router.get('/:userId/:courseId', async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.params.userId, courseId: req.params.courseId });
    if (!progress) return res.status(404).json({ error: 'Progress not found' });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update or create progress
router.post('/', async (req, res) => {
  const { userId, courseId, completed } = req.body;

  try {
    let progress = await Progress.findOne({ userId, courseId });

    if (progress) {
      progress.completed = completed;
      await progress.save();
    } else {
      progress = new Progress({ userId, courseId, completed });
      await progress.save();
    }

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
