const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://movie:abdul12345@atlascluster.z0cd26s.mongodb.net/movies';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
