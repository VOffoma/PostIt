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
      req.user.addGroup(group);
      return res.status(200).send(group);
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

