const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);
const Recompense = require('../models/Recompense');

Recompense.init(connection);

module.exports = connection;