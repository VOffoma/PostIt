module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    purpose: DataTypes.STRING,
    access: DataTypes.ENUM('Private', 'Public')
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Group;
};
