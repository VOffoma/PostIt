const express = require('express');
const userController = require('./controllers/userController')();
const groupController = require('./controllers/groupController')();
const middlewareService = require('./services/middlewareService')();


const Routes = () => {
  const router = express.Router();

  router.route('/user/signup')
    .post(userController.registerUser);

  router.route('/user/signin')
    .post(userController.authenticateUser);

  router.use(middlewareService.verifyToken);

  router.route('/users')
      .get(userController.getAllUsers);

  router.route('/user/groups')
      .get(userController.getAllUserGroups);

  router.route('/group')
    .post(groupController.createGroup);

  router.route('/group/{groupId}/user')
    .post(groupController.addUserToGroup);

  // router.route('/group/{groupId}/users')
  //    .get(groupController.getGroupUsers);

  // router.route('/group/{groupId}/message')
  //    .post(groupController.createMessage);

  // router.route('/group/{groupId}/messages')
  //    .get(groupController.getGroupMessages);

  return router;
};

module.exports = Routes;
