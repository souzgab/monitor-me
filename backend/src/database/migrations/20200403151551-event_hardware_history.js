'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_hardwares_histories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      hardId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'event_hardwares',
          key: 'id'
        } ,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: false,
      },
      memoryRamReg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      GPUReg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hardDiskReg: {
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
      return queryInterface.dropTable('event_hardwares_histories');
    }
  };
