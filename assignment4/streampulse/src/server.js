const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line to import the cors package
const db = require('./db');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const myListRoutes = require('./routes/myList');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Access the MongoDB connection from db.js
db.once('open', () => {
  app.use('/', signupRoutes);
  app.use('/', loginRoutes);
  app.use('/api/mylist', myListRoutes);

  const port = 5000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
