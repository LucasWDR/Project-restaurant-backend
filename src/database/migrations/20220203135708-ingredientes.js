module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('Ingredientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantidade:{
        allowNull: false,
        type:DataTypes.DECIMAL
      },
      price:{
        allowNull: false,
        type:DataTypes.DOUBLE(11, 10)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Ingredientes');
  }
};
