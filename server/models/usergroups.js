module.exports = (sequelize, DataTypes) => {
  const UserGroups = sequelize.define('UserGroups', {
    role: {
      type: DataTypes.ENUM('GroupAdmin', 'Member'),
      defaultValue: 'Member',
      validate: {
        isIn: {
          args: ['GroupAdmin', 'Member'],
          msg: 'role can be either be Member or GroupAdmin'
        }
      }
    },
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });

  // const User = sequelize.models.User;
  // const Group = sequelize.models.Group;

  // Group.belongsToMany(User, { through: UserGroups, foreignKey: 'groupID' });
  // User.belongsToMany(Group, { through: UserGroups, foreignKey: 'userID' });
  return UserGroups;
};
