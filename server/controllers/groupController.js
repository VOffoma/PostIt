const models = require('../models/index');

function GroupController() {
  const addUser = (role, group, user) => {
    group.UserGroups = {
      role: role
    };
    user.addGroup(group);
  };

  const createGroup = (req, res) => {
    models.Group.create({
      name: req.body.name,
      purpose: req.body.purpose,
      access: req.body.access
    })
    .then((group) => {
      addUser('GroupAdmin', group, req.user);
      return res.status(200).send(`group ${group} has been successfully created`);
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
      addUser('Member', group, req.user);
      return res.status(200).send(`${req.user.username} is now a member of ${group.name}`);
    })
    .catch(error => res.status(400).send(error));
  };

  return {
    createGroup,
    addUserToGroup
  };
}

module.exports = GroupController;

