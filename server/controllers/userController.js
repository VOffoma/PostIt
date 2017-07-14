const models = require('../models/index');
const jwt = require('jsonwebtoken');

function UserController() {
  const register = (req, res) => {
    models.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error));
  };

  const authenticate = (req, res) => {
    models.User.find({ username: req.body.username })
    .then((user) => {
      if (user.password !== req.body.password) {
        res.status(400).send({ success: false, message: 'Authentication failed! Wrong Password!' });
      } else {
        const token = jwt.sign({ id: user.id, username: user.username }, 'VOR4MA.1');
        res.status(200).send({ success: true, message: 'Authentication successfully', token });
      }
    })
    .catch(error => res.status(404).send({ success: false, message: error || 'user not found' }));
  };

  const getAllUsers = (req, res) => {
    models.User.findAll({})
    .then((users) => {
      if (users.length === 0) {
        res.status(200).send({ success: true, message: 'there are no users registered' });
      } else {
        res.status(200).send({ success: true, message: 'users gotten successfully', data: users });
      }
    })
    .catch(error => res.status(400).send({ success: false, message: error }));
  };

  const getAllUserGroups = (req, res) => {
    console.log(req.user.id);
    models.User.find({
      where: {
        id: parseInt(req.user.id)
      }
    })
    .then((user) => {
      if (!user || user == null) {
        return res.status(401).send({ success: false, message: 'Unauthorized!' });
      } else {
        user.getGroups({ attributes: ['name', 'purpose'], joinTableAttributes: [] }).then((usergroups) => {
          if (usergroups.length > 0) {
            return res.status(200).send({ success: true, message: 'Authentication successfully', data: usergroups });
          }
          return res.status(200).send({ success: true, message: 'this user does not belong to any group' });
        });
      }
    })
    .catch(error => res.status(400).send({ success: false, message: error }));
  };

  return {
    registerUser: register,
    authenticateUser: authenticate,
    getAllUsers,
    getAllUserGroups
  };
}

module.exports = UserController;
