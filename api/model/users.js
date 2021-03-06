const Sequelize = require('sequelize');
const database = require('./database');

const users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.STRING(30),
        uniqueKey: true,
    },
    user_pw: {
        type:Sequelize.STRING(30)
    }
}, {
    tableName: 'users',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});

module.exports = users;
