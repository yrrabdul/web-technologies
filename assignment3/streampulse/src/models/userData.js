const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  email: String,
  password: String
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
