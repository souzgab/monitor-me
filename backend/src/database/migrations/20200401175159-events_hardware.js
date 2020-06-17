'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_hardwares', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      memoryRam: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      GPU: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hardDisk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'monitor_users',
          key: 'id'
        } ,
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
      return queryInterface.dropTable('event_hardwares');
    }
  };
