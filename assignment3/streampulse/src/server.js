const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes/signup');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Access the MongoDB connection from db.js
db.once('open', () => {
  app.use('/', routes);

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
