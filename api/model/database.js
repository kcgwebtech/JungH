const Sequelize = require('sequelize');

const database = new Sequelize(
    'account',
    'root',
    'ahskal8213',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = database;