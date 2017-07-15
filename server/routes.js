const express = require('express');
const userController = require('./controllers/userController')();
const groupController = require('./controllers/groupController')();
const middlewareService = require('./services/middlewareService')();


const Routes = () => {
  const router = express.Router();

  router.route('/users/signup')
    .post(userController.registerUser);

  router.route('/users/signin')
    .post(userController.authenticateUser);

  router.use(middlewareService.verifyToken);

  router.route('/users')
      .get(userController.getAllUsers);

  router.route('/users/:userId/groups')
      .get(userController.getAllUserGroups);

  router.route('/groups')
    .post(groupController.createGroup)
    .get(groupController.getAllGroups);

  router.route('/groups/:groupId/users')
    .post(groupController.addUserToGroup)
    .get(groupController.getGroupUsers);

  router.route('/groups/:groupId/messages')
    .post(groupController.createMessage)
    .get(groupController.getGroupMessages);

  return router;
};

module.exports = Routes;
