import express from 'express';
const router = express.Router();

// get a list of users from the db
router.get('/users', (req, res) => {
  res.send({type: 'GET'});
});

// add a new user to the db
router.post('/users', (req, res) => {
  console.log(req.body); //console log the request body
  res.send({
    type: 'Post',
    name: req.body.name,
    rank: req.body.rank
  });
});

// update a user in the db
router.put('/users/:id', (req, res) => {
  res.send({type: 'PUT'});
});

// delete a user from the db
router.delete('/users/:id', (req, res) => {
  res.send({type: 'DELETE'});
});

export default router; 