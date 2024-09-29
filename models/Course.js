const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoId: { type: String, required: true }  // Cloud video ID or URL
});

module.exports = mongoose.model('Course', CourseSchema);
