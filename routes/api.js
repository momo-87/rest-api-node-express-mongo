import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// get a list of users from the db
router.get('/users', (req, res, next) => {
  res.send({type: 'GET'});
});

// add a new user to the db
router.post('/users', (req, res, next) => {
  User.create(req.body).then((user) => {
    res.send(user);
  }).catch(next); // catch any errors, call the next middleware (error handling middleware) in the chain (see index.js)
});

// update a user in the db
router.put('/users/:id', (req, res, next) => {
  res.send({type: 'PUT'});
});

// delete a user from the db
router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndDelete({_id:req.params.id}).then((user) => {
    res.send(user);
  });
});

export default router; 