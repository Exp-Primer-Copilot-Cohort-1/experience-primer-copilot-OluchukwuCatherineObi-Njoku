// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Create web server application
const app = express();

// Import database
const db = require('./db');

// Import routes
const comments = require('./routes/comments');

// Log requests to console
app.use(morgan('dev'));

// Parse JSON requests
app.use(bodyParser.json());

// Mount routes
app.use('/api/comments', comments);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

