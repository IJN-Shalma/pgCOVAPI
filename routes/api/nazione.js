const express = require('express');
const router = express.Router();
let Nazione = require("../../models/nazione.model");


router.route('/:campo?').get((req, res) => {
    const pMese = req.query.mese || null;
    var param = req.params.campo || null;
    let days = req.query.giorni || null;
    let query = {};

    if(days){
        let date = new Date();
        date.setDate(date.getDate() - days);
        query.data = {$gte: date.toISOString()};

        if(days <= 0){
            res.status(400);
            res.send("Il parametro giorni deve essere maggiore di 0");
            return;
        }
    }

    if (param) {
        param = loadBasicParams(param);
    }

    if (pMese) {
        //spMese[0] = Mese
        //spMese[1] = Anno
        let spMese = pMese.split('-');
        spMese[0].length == 1 && spMese[0] < 10 ? spMese[0] = "".concat("0", spMese[0]) : null;
        query.data = { $gte: spMese[1] + "-" + spMese[0] + "-0", $lte: spMese[1] + "-" + spMese[0] + "31" }
    }

    Nazione.find(query)
        .sort({ "data": 1 })
        .select(param)
        .then(nazione => res.json(nazione))
        .catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;