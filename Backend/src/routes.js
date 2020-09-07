const express = require('express');
const routes = express.Router();

const RecompenseController = require('./controllers/RecompenseController');

routes.get('/', (req, res) => {
    return res.json({ message: true });
});

routes.get('/recompenses', RecompenseController.listRecompenses);
routes.post('/register', RecompenseController.registerRecompense);

module.exports = routes;