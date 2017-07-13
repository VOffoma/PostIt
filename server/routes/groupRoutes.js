const express = require('express');


const Routes = () => {
  console.log('in group routes');
  const router = express.Router();
  const groupController = require('../controllers/groupController')();

  router.route('/')
    .post(groupController.createGroup);

  router.route('/:groupid/user')
    .post(groupController.addUserToGroup);

  // router.route('/{groupId}/user')
    // .post(groupController.addUserToGroup);

  return router;
};

module.exports = Routes;
