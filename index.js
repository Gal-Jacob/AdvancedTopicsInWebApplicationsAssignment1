//gal-yaakov-323858381-ido-sharon-IdoID
// TODO: 
// 1. Do all comments routes and logic.
// 2. Do all test with postman + video.
// 3. Capture the git 'Network Graph'.

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./app/db/mongoHandler');
const postRoutes = require('./app/routes/Post');
// const commentsRoutes = require('./app/routes/Comments');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/Post', postRoutes);

// Start server
app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});