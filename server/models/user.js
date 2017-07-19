module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: {
          args: [1, 100],
          msg: 'username can not be an empty string'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 100],
          msg: 'username can not be an empty string'
        },
        isEmail: {
          msg: 'Please enter a correct email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 100],
          msg: 'password can not be an empty string'
        }
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.belongsToMany(models.Group, { through: models.UserGroups, foreignKey: 'userID' });
      }
    }
  });

  return User;
};
