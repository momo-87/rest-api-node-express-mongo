import express from 'express';
import House from '../models/house.js';

const router = express.Router();

// get a list of Houses from the db
router.get('/houses', (req, res, next) => {
  // Get all existing houses
  // House.find({}).then((house) => {
  //   res.send(house);
  // });

  // get all houses based on the provided coordinates and maxDistance
  const longitude = parseFloat(req.query.long);
  const latitude = parseFloat(req.query.lat);

  // Define the geoNear aggregation pipeline
  const geoNearPipeline = [
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        distanceField: 'distance',
        maxDistance: 100000,
        spherical: true
      },
    },
  ];

  House.aggregate(geoNearPipeline)
    .then((houses) => {
      res.send(houses);
    }).catch(next);
});

// add a new house to the db
router.post('/houses', (req, res, next) => {
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