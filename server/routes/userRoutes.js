const express = require('express');


const Routes = () => {
  const router = express.Router();
  const userController = require('../controllers/userController')();

  router.route('/signup')
    .post(userController.registerUser);

  router.route('/signin')
    .post(userController.authenticateUser);


  return router;
};

module.exports = Routes;
