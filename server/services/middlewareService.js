const models = require('../models/index');
const jwt = require('jsonwebtoken');

module.exports = () => {
  const verifyToken = (req, res, next) => {
    const token = req.body.token || req.params.token || req.headers['x-access-token'];
    jwt.verify(token, 'VOR4MA.1', (error, decoded) => {
      if (error) {
        req.user = undefined;
        res.status(400).send({ success: false, message: 'token authentication unsuccessful' });
      } else {
        req.user = decoded;
        next();
      }
    });
  };

  const isUserExisting = (req, res, next) => {
    models.User.find({
      where: {
        id: parseInt(req.body.userId)
      }
    })
   .then((user) => {
     if (user) {
       req.user = user;
       next();
     } else {
       res.status(400).send('no such user');
     }
   })
   .catch(error => res.status(400).send(error));
  };

  return {
    verifyToken, isUserExisting
  };
};
