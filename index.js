import express from 'express';
import routes from './routes/api.js';
import bodyParser from 'body-parser';

// Create express instance
const app = express();

// use bodyParser to parse the request body
app.use(bodyParser.json());

// initilize routes
app.use('/api', routes);

// listen for requests (process.env.port is if we deploy on platform Heroku, which uses an environment variable to set the port)
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests');
});