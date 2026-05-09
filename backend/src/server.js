const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Portfolio')
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));   

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the data directory if it exists
const dataDir = process.env.DATA_DIR || path.join(__dirname, '../data');
app.use('/uploads', express.static(dataDir));

// Basic Routes
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Backend is running smoothly' });
});

app.use('/api/projects', require('./routes/projects'));
app.use('/api/inquiries', require('./routes/inquiry'));

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the Portfolio API',
        endpoints: {
            health: '/api/health',
            projects: '/api/projects',
            inquiries: '/api/inquiries'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
