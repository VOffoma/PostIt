module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('Users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          // allowNull: false
          autoIncrement: true
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [1, 100],
              msg: 'username can not an empty string'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
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
    queryInterface.dropTable('Users');
  }
};
