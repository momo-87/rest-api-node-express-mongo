import mongoose from 'mongoose';
import faker from 'faker';

import House from '../models/house.js';

// Connect to  MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/house');
mongoose.Promise = global.Promise; // use ES6 promises, mongoose.Promise is deprecated

// Function to generate a fake house
const generateFakeHouse = () => ({
  title: faker.random.words(3),
  description: faker.lorem.paragraph(),
  type: faker.random.arrayElement(['Apartment', 'House', 'Condo']),
  price: faker.datatype.number({ min: 100000, max: 1000000 }),
  location: faker.address.city(),
  bedrooms: faker.datatype.number({ min: 1, max: 5 }),
  bathrooms: faker.datatype.number({ min: 1, max: 3 }),
  area: faker.datatype.number({ min: 500, max: 3000 }),
  yearBuild: faker.date.past(20),
  status: faker.random.arrayElement(['For sale', 'For rent']),
  features: faker.random.words(5),
  images: faker.image.imageUrl(), 
  virtualTour: faker.image.imageUrl(),
  available: faker.datatype.boolean(),
  additionalNote: faker.lorem.sentence(),
  dateListed: faker.date.past(1),
  dateUpdated: faker.date.recent(),
  agent: {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    image: faker.image.imageUrl()
  },
  geometry: {
    type: 'Point',
    coordinates: [faker.address.longitude(), faker.address.latitude()]
  }
});

// Function to generate multiple fake houses
const generateFakeHouses = (count) => {
  const fakeHouses = [];
  for (let i = 0; i < count; i++) {
    fakeHouses.push(generateFakeHouse());
  }
  return fakeHouses;
};

// Generate five fake houses
const fakeHouses = generateFakeHouses(5);

// Save the fake houses to the database
House.insertMany(fakeHouses)
  .then(() => {
    console.log('Fake houses created successfully.');
    // Close the database connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error creating fake houses:', err);
    // Close the database connection
    mongoose.connection.close();
  });
