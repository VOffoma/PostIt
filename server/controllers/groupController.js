const models = require('../models/index');

function GroupController() {
  const testRoute = (req, res) => {
    res.status(200).send({ greeting: 'hello world' });
  };

  const createGroup = (req, res) => {
    models.Group.create({
      name: req.body.name,
      purpose: req.body.purpose,
      access: req.body.access
    })
    .then((group) => {
      group.UserGroups = {
        role: 'GroupAdmin'
      };
      models.User.find({
        where: {
          id: parseInt(req.user.id)
        }
      }).then((user) => {
        group.addUser(user);
        return res.status(200).send(group);
      });
      //
      // req.user.addGroup(group);
    })
    .catch(error => res.status(400).send(error));
  };


  // const addUserToGroup = (req, res) => {  
  // };

  return {
    test: testRoute,
    createGroup
  };
}

module.exports = GroupController;

