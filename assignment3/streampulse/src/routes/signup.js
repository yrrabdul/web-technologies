const express = require('express');
const UserData = require('../models/userData');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const newUser = new UserData({ email, password });

  newUser.save()
    .then(() => {
      res.send('User registered successfully');
    })
    .catch((error) => {
      console.error('Error registering user:', error);
      res.status(500).send('An error occurred');
    });
});

module.exports = router;
