module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('GroupMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priority: {
        type: Sequelize.ENUM('Normal', 'Urgent', 'Critical'),
        defaultValue: 'Normal'
      },
      read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      groupId: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('GroupMessages');
  }
};
