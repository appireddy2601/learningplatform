const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Progress', ProgressSchema);
