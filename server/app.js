const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const database = require('./config/connectdb');

// Load database config
const dbConfig = require('./config/database');

// Connect to the database
database.connect(dbConfig.uri);

// Use body parser middleware
app.use(bodyParser.json());
// Enable CORS
app.use(cors());


// Load routes
const urlRoutes = require('./routes/url');

// Use routes
app.use('/', urlRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
