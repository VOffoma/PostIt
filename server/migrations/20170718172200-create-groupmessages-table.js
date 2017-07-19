'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('GroupMessages',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          // allowNull: false
          autoIncrement: true
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
        userId: Sequelize.INTEGER,
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.dropTable('GroupMessages');
  }
};
