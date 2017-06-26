const models = require('../models/index');

function GroupController() {
  const testRoute = (req, res) => {
    res.status(200).send({ greeting: 'hello world' });
  };

  const addUser = (role) => {

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


  const addUserToGroup = (req, res) => {
    models.Group.find({
      where: {
        id: parseInt(req.params.groupid)
      }
    })
    .then((group) => {
      group.UserGroups = {
        role: 'Member'
      };
      req.user.addGroup(group);
      return res.status(200).send(`${req.user.username} is now a member of ${group.name}`);
    })
    .catch(error => res.status(400).send(error));
  };

  return {
    test: testRoute,
    createGroup,
    addUserToGroup
  };
}

module.exports = GroupController;

