const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);
const Recompense = require('../models/Recompense');

//const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
Recompense.init(connection);

//Recompense.create({description: 'Tomar sorvete depois do jantar'});

module.exports = connection;