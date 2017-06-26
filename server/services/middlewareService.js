const models = require('../models/index');

module.exports = () => {
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
    isUserExisting
  };
};
