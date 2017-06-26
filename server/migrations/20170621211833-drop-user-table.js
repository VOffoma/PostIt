'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.dropTable('Users');
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.createTable('Users', {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER
       },
       username: {
         type: Sequelize.STRING
       },
       email: {
         type: Sequelize.STRING
       },
       password: {
         type: Sequelize.STRING
       },
       createdAt: {
         allowNull: false,
         type: Sequelize.DATE
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE
      }
     });
  }
};
