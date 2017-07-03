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
      console.log(`user is ${user.username}`);
      if (user.password !== req.body.password) {
        res.status(400).send({ success: false, message: 'Authentication failed! Wrong Password!' });
      } else {
        const token = jwt.sign({ id: user.id, username: user.username, email: user.email, password: user.password, createdAt: user.createdAt }, 'VOR4MA.1');
        res.status(200).send({ success: true, message: 'Authentication successfully', token });
      }
    })
    .catch(error => res.status(404).send({ success: false, message: error || 'user not found' }));
  };

  return {
    registerUser: register,
    authenticateUser: authenticate
  };
}

module.exports = UserController;
