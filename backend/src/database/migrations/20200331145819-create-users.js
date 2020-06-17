'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('monitor_users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whatsapp:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('monitor_users');
    }
  };
