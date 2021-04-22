const express = require('express');
const router = express.Router();
let Nazione = require("../../models/nazione.model");

/**
 * @route /api/nazione
 * @route /nazione/{totale_positivi}
 * @route /nazione/?mese={02-2020}
 * @route /nazione/?giorni={30}
 * @desc Get Informazioni Covid per riguardanti
 * @access Public
 */

router.route('/').get((req, res) => {
    const pMese = req.query.mese || null;
    var param = req.query.campo || null;
    let days = req.query.giorni || null;
    let query = {};

    if (days) {
        let date = new Date();
        date.setDate(date.getDate() - days);
        query.data = { $gte: date.toISOString() };

        if (days <= 0) {
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


/**
 * Prepares must parameters for Schema#select
 * @param {*} param Parameter name in collection
 * @returns Array of strings (parameters names)
 */

function loadBasicParams(param) {
    return [param, "data", "stato", "codice_regione", "denominazione_regione"].join(" ");
}


module.exports = router;