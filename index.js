// Dependencies
const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

const port = process.env.PORT;
// Listen PORT
app.listen(port, async () => {
  console.log(`Server is Running at http://localhost:${port}`);
  // MongoDB Database Connection
  connectDB();
});