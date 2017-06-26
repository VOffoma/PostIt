const models = require('../models/index');

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
    models.User.find({ username: req.body.username, password: req.body.password })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error));
  };
  const testRoute = (req, res) => {
    console.log('in testroute');
    return res.status(200).send({ greeting: 'hello world' });
  };

  return {
    registerUser: register,
    authenticateUser: authenticate,
    test: testRoute
  };
}

module.exports = UserController;
