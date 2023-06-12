const express = require('express');
const bcrypt = require('bcrypt');
const UserData = require('../models/userData');

const router = express.Router();

// Fixed salt value
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // // Hash the password using the fixed salt value
  // const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = new UserData({ email, password});

  newUser
    .save()
    .then(() => {
      res.send('User registered successfully');
    })
    .catch((error) => {
      console.error('Error registering user:', error);
      res.status(500).send('An error occurred');
    });
});

module.exports = router;
