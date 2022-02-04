'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Cardapio', {
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
  },

  async down (queryInterface, Sequelize) {
    
  }
};
