const mongoose = require('mongoose');

const myListSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

const MyList = mongoose.model('MyList', myListSchema);

module.exports = MyList;
