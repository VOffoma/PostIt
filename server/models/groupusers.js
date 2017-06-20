const User = require('./user');
const Group = require('./group');

module.exports = (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    access: DataTypes.BOOL,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });

  User.belongsToMany(Group, { through: GroupUsers });
  Group.belongsToMany(User, { through: GroupUsers });
  return GroupUsers;
};
