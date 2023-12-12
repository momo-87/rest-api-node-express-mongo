import express from 'express';
import House from '../models/house.js';

const router = express.Router();

// get a list of Houses from the db
router.get('/house', (req, res, next) => {
  res.send({type: 'GET'});
});

// add a new house to the db
router.post('/house', (req, res, next) => {
  House.create(req.body).then((house) => {
    res.send(house);
  }).catch(next); // catch any errors, call the next middleware (error handling middleware) in the chain (see index.js)
});

// update a house in the db
router.put('/houses/:id', (req, res, next) => {
  House.findByIdAndUpdate({_id:req.params.id},req.body).then(() => {
    House.findOne({_id:req.params.id}).then((house) => {
      res.send(house);
    });
  }).catch(next);
});

// delete a house from the db
router.delete('/houses/:id', (req, res, next) => {
  House.findByIdAndDelete({_id:req.params.id}).then((house) => {
    res.send(house);
  }).catch(next);;
});

export default router; 