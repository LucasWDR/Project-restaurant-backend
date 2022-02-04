'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Ingredientes', {
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
      quantidade: {
        allowNull: false,
        type:  Sequelize.DataTypes.STRING,
       // unique: true,
      },
      preco: {
        allowNull: false,
        type:  Sequelize.DataTypes.DECIMAL,
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
    return queryInterface.dropTable('Ingredientes');
  }
};
