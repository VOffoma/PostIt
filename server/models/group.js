module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [1, 100],
          msg: 'Group name can not an empty string'
        }
      }
    },
    purpose: DataTypes.STRING,
    access: {
      type: DataTypes.ENUM('Private', 'Public'),
      defaultValue: 'Public',
      validate: {
        isIn: {
          args: ['Private', 'Public'],
          msg: 'Access right has to be either private and public'
        }
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Group.hasMany(models.GroupMessages, {
          foreignKey: 'groupId'
        });
        Group.belongsToMany(models.User, { through: models.UserGroups, foreignKey: 'groupID' });
      }
    }
  });
  return Group;
};
