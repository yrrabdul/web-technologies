const express = require('express');
const UserData = require('../models/userData');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate if the email and password fields are not empty
  if (!email || !password) {
    return res.status(400).send('Please fill all the fields.');
  }

  const user = await UserData.findOne({ email });

  if (!user) {
    return res.status(401).send('Email or password is incorrect.');
  }

  if (password === user.password) {
    return res.send('Login successful.');
  } else {
    return res.status(401).send('Email or password is incorrect.');
  }
});

module.exports = router;
