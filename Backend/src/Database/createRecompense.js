module.exports = async function(db, {recompenseValue, timeValue, categoriaValue}){

    const insertedRecompense = await db.run(`
        INSERT INTO recompenses (
            tipo,
            descricao
        ) VALUES (
            "${recompenseValue.tipo}",
            "${recompenseValue.descricao}"
        )
    `);
    const recompense_id = insertedRecompense.lastID

    const insertedRecompense = await db.run(`
        INSERT INTO times (
            recompense_id,
            time
        ) VALUES (
            "${recompense_id}"
            "${timeValue.time}"
        )
    `);

    const insertedRecompense = await db.run(`
        INSERT INTO categorias (
            recompense_id,
            categoria
        ) VALUES (
            "${recompense_id}"
            "${categoriaValue.categoria}"
        )
    `);
};

