'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                unique: true,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
    }
};
