module.exports = (sequelize, DataTypes) => {
  const GroupMessages = sequelize.define('GroupMessages', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM('Normal', 'Urgent', 'Critical'),
      defaultValue: 'Normal'
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
