const routes = require('express').Router();
const bodyParser = require('body-parser');

// Require routes
const users = require('./users');

// configure app to use bodyParser()
// this will let us get the data from a POST
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use((req, res, next) => {
  // do logging
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});

routes.get('/api/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello world!' });
});

routes.use('/api/users', users);

module.exports = routes;
