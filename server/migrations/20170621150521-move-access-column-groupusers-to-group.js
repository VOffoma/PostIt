module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn('Groups', 'access', {
        type: Sequelize.ENUM('Private', 'Public'),
        allowNull: false
      }),
      queryInterface.removeColumn('GroupUsers', 'access')
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
      queryInterface.removeColumn('Groups', 'access'),
      queryInterface.addColumn('GroupUsers', 'access', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ];
  }
};
