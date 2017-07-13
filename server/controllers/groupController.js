const models = require('../models/index');

function GroupController() {
  const addUser = (role, group, userId) => {
    models.User.find({
      where: {
        id: userId
      }
    })
    .then((user) => {
      group.UserGroups = {
        role
      };
      user.addGroup(group);
    });
  };

  const createGroup = (req, res) => {
    models.Group.create({
      name: req.body.name,
      purpose: req.body.purpose,
      access: req.body.access
    })
    .then((group) => {
      addUser('GroupAdmin', group, req.user.id);
      if (req.body.membersId && req.body.membersId.length > 0) {
        const membersIdArray = req.body.membersId;
        for (let i = 0; i < membersIdArray.length; i += 1) {
          addUser('Member', group, membersIdArray[i]);
        }
      }
      return res.status(201).send(`group ${group} has been successfully created`);
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
      return res.status(200).send({ success: true, message: 'user(s) has been successfully added' });
    })
    .catch(error => res.status(400).send(error));
  };

  return {
    createGroup,
    addUserToGroup
  };
}

module.exports = GroupController;

