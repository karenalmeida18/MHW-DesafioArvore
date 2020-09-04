const Database = require('./db');

const tipos = [
    "Por tempo",
    "Por categoria",
    "Por livro",
]

const categorias = [
    "Artes",
    "Fantasia",
    "Ciências",
    "Exatas",
    "Romance",
    "Infantil",
]

const tempo = [
    10,
    20,
    30,
    40,
    50,
    60,
]

function getTipo(tipoNumber){
    const position = +tipoNumber - 1;
    return tipos[position];
}

function getCategoria(CategoriaNumber){
    const position = +CategoriaNumber - 1;
    return categorias[position];
}

async function pageHome(req, res){
    return res.render("index.html");
}

async function pageRecompenses(req, res){
    try{
        const db = await Database;

        const query = `SELECT descricao FROM recompenses`;

        const recompenses = await db.all(query);

        return res.render("recompenses.js", {recompenses});
    } catch (error){
        console.log(error);
    }
}

async function page(req, res){

}

async function saveRecompenses(req, res) {
    const createRecompense = require('../Database/createRecompense');
    
    const recompense = {
        tipo: req.body.tipo,
        descricao: req.body.tipo,
        time: req.body.tipo,
        categoria: req.body.tipo,
    }
}

module.exports = {
    tipos,
    categorias,
    tempo,
    getTipo,
    getCategoria
}