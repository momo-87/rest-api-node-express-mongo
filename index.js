import express from 'express';

// Create express instance
const app = express();

app.get('/api', (req, res) => {
  console.log('GET request');
  res.send({nome: 'Momo'});
});


// listen for requests (process.env.port is if we deploy on platform Heroku, which uses an environment variable to set the port)
app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests');
});