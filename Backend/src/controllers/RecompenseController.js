const Recompense = require('../models/Recompense');

module.exports = {
    async registerRecompense (req, res){
        const recompense = await Recompense.create(req.body);
        res.json(recompense);
    },
    
    async listRecompenses (req, res){
        try {
            const allRecompenses = await Recompense.findAll();
            if (allRecompenses.length === 0)
                return res.status(404).json({ msg: 'NO RECOMPENSE FOUND' });
            return res.status(200).json(allRecompenses);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'GET ALL ERROR' });
        }
    },


};