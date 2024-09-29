const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');

require('dotenv').config();  // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON

// Connect to MongoDB
connectDB();

// API routes
app.use('/api/courses', courseRoutes);
app.use('/api/progress', progressRoutes);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
