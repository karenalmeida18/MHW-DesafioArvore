const Database = require('sqlite-async');

function execute(db){

    return db.exec(`
        CREATE TABLE IF NOT EXISTS recompenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo INTEGER,
            descricao TEXT
        );

        CREATE TABLE IF NOT EXISTS times (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            recompense_id INTEGER,
            time INTEGER
        );

        CREATE TABLE IF NOT EXISTS categorias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            recompense_id INTEGER,
            categoria INTEGER
        );
    `)
};

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);