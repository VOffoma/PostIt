module.exports = (sequelize, DataTypes) => {
  const GroupMessages = sequelize.define('GroupMessages', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: 'message content can not be an empty string'
        }
      }
    },
    priority: {
      type: DataTypes.ENUM('Normal', 'Urgent', 'Critical'),
      defaultValue: 'Normal',
      validate: {
        isIn: {
          args: ['Normal', 'Urgent', 'Urgent'],
          msg: 'Priority is either Normal, Urgent or Critical'
        }
      }
    },
    read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        GroupMessages.belongsTo(models.Group, {
          foreignKey: 'groupId',
          onDelete: 'CASCADE',
        });
        GroupMessages.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return GroupMessages;
};
