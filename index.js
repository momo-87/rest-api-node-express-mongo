import express from 'express';
import routes from './routes/api.js';

// Create express instance
const app = express();

// initilize routes
app.use('/api', routes);

// listen for requests (process.env.port is if we deploy on platform Heroku, which uses an environment variable to set the port)
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests');
});