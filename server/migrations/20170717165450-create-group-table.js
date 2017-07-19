module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('Groups',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          // allowNull: false
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        purpose: {
          type: Sequelize.STRING,
          allowNull: true
        },
        access: {
          type: Sequelize.ENUM('Private', 'Public'),
          defaultValue: 'Public',
        },
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
    queryInterface.dropTable('Groups');
  }
};
