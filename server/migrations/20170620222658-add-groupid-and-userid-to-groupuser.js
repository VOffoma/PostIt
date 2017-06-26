module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn('GroupUsers', 'groupID', {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.addColumn('GroupUsers', 'userID', {
        type: Sequelize.INTEGER,
        allowNull: false
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('GroupUsers', 'groupID'),
      queryInterface.removeColumn('GroupUsers', 'userID')
    ];
  }
};
