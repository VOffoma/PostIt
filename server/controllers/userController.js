const models = require('../models/index');

function UserController() {
  const register = (req, res) => {
    console.log('in register method');
    models.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error));
  };

  return {
    registerUser: register
  };
}

module.exports = UserController;
