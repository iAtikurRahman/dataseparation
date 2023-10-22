// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();


// ERROR: client error handling
app.use('*', (req, res) => {
  res.status(400).json({ Error: 'Route Not Found' });
});

// export
module.exports = app;