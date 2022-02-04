'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Receitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type:  Sequelize.DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type:  Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type:  Sequelize.DataTypes.DATE,
      },
    });

    // A fazer ligação com a tabela ingredientes
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Receitas');
  }
};
