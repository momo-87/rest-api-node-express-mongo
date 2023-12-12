import mongoose from 'mongoose';
import House from '../models/house.js';

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/house');
mongoose.Promise = global.Promise; // use ES6 promises, mongoose.Promise is deprecated

// Delete all records from the 'houses' collection
House.deleteMany({})
  .then(() => {
    console.log('All records deleted successfully.');
    // Close the database connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error deleting records:', err);
    // Close the database connection
    mongoose.connection.close();
  });
