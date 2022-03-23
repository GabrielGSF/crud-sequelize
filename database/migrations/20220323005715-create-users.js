//migrations, que são os arquivos que guardam as versões da base de dados;

'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    //up, que é a função que indica o que modificar no banco de dados quando executarmos a migration
    //npx sequelize db:migrate
    return queryInterface.createTable('Users', {
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
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
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

  down: (queryInterface) => {
    // down, que funciona como um rollback, ou seja, tudo que for feito na up deve ser desfeito na down.
    return queryInterface.dropTable('Users');
  }
};
