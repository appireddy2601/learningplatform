const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new course (Optional, for admin purposes)
router.post('/', async (req, res) => {
  const { title, description, videoId } = req.body;

  try {
    const newCourse = new Course({ title, description, videoId });
    await newCourse.save();
    res.json(newCourse);
  } catch (err) {
    res.status(500).json({ error: 'Error creating course' });
  }
});

module.exports = router;
