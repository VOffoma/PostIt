module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('UserGroups',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          // allowNull: false
          autoIncrement: true
        },
        role: {
          type: Sequelize.ENUM('GroupAdmin', 'Member'),
          defaultValue: 'Member',
        },
        userID: Sequelize.INTEGER,
        groupID: Sequelize.INTEGER,
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
    return queryInterface.dropTable('UserGroups');
  }
};
