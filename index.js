import express from 'express';
import routes from './routes/api.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Create express instance
const app = express();

// connect to mongodb (user is the database name and mongo will create it if it doesn't exist yet)
mongoose.connect('mongodb://127.0.0.1:27017/user');
mongoose.Promise = global.Promise; // use ES6 promises, mongoose.Promise is deprecated

// use bodyParser to parse the request body
app.use(bodyParser.json());

// initilize routes
app.use('/api', routes);

// listen for requests (process.env.port is if we deploy on platform Heroku, which uses an environment variable to set the port)
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests');
});