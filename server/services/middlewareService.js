const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = () => {
  const verifyToken = (req, res, next) => {
    const token = req.body.token || req.params.token || req.headers['x-access-token'];
    jwt.verify(token, 'VOR4MA.1', (error, decoded) => {
      if (error) {
        req.user = undefined;
        res.status(400).send({ success: false, error: 'token authentication unsuccessful' });
      } else {
        req.user = decoded;
        next();
      }
    });
  };

  const hashPassword = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
      if (error) {
        res.status(400).send({ success: false, error: 'Sorry, an error has occured. please try later' });
      } else {
        req.body.password = hash;
        next();
      }
    });
  };


  return {
    verifyToken, hashPassword
  };
};
