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
      return res.status(201).send('group has been successfully created');
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
      if (req.body.membersId && req.body.membersId.length > 0) {
        const membersIdArray = req.body.membersId;
        for (let i = 0; i < membersIdArray.length; i += 1) {
          addUser('Member', group, membersIdArray[i]);
        }
        return res.status(200).send({ success: true, message: 'user(s) has been successfully added' });
      }
      return res.status(406).send({ success: false, message: 'no users were specified' });
    })
    .catch(error => res.status(400).send(error));
  };

  const createMessage = (req, res) => {

  };

  const getGroupMessages = (req, res) => {

  };

  const getGroupUsers = (req, res) => {
    models.Group.find({
      where: {
        id: parseInt(req.params.groupId)
      }
    })
    .then((group) => {
      if (!group || group == null) {
        return res.status(404).send({ success: false, message: 'Selected group doesnt existed!' });
      } else {
        group.getUsers({ attributes: ['username', 'email'], joinTableAttributes: [] }).then((groupusers) => {
          if (groupusers.length > 0) {
            return res.status(200).send({ success: true, message: 'group users gotten successfully', data: groupusers });
          }
          return res.status(200).send({ success: true, message: 'this group has no users' });
        });
      }
    })
    .catch(error => res.status(400).send({ success: false, message: error }));
  };

   const getAllGroups = (req, res) => {
     models.Group.findAll({})
    .then((groups) => {
      if (groups.length === 0) {
        res.status(200).send({ success: true, message: 'there are no groups created' });
      } else {
        res.status(200).send({ success: true, message: 'groups gotten successfully', data: groups });
      }
    })
    .catch(error => res.status(400).send({ success: false, message: error }));
   };

  return {
    createGroup,
    addUserToGroup,
    createMessage,
    getGroupMessages,
    getGroupUsers,
    getAllGroups
  };
}

module.exports = GroupController;

