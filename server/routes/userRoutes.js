const express = require('express');


const Routes = () => {
  console.log('in user routes');
  const router = express.Router();
  const userController = require('../controllers/userController')();

  router.route('/signup')
    .post(userController.registerUser);

  return router;
};

module.exports = Routes;
