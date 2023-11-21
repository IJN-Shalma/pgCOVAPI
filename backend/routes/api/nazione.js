const express = require('express');
const router = express.Router();
let Nazione = require("../../models/nazione.model");

/**
 * @route /api/nazione
 * @route /nazione/?campo=totale_positivi
 * @route /nazione/?mese=02-2020
 * @route /nazione/?giorni=30
 * @route /nazione/?dataInizio=2021-05-01&dataFine=2021-05-06
 * @desc Get Informazioni Covid riguardanti l'andamento nazionale
 * @access Public
 */

router.route('/').get(async(req, res) => {
    const pMese = req.query.mese || null;
    let param = req.query.campo || null;
    let days = req.query.giorni || null;
    let startDate = req.query.dataInizio || null
    let endDate = req.query.dataFine || null;
    let query = {};

    if ((days && (startDate || endDate)) || (pMese && (startDate || endDate)) || (pMese && days)) {
        return res.status(400).json('Errore: Parametri incompatibili')
    }
    else {
        if (days) {
            const lastDatePromise = new Promise((resolve, reject) => {
                Nazione.find()
                    .sort({ "data": -1 })
                    .limit(1)
                    .select("data")
                    .then(nazione => { resolve(nazione[0].data) })
            })
            let date = new Date(await lastDatePromise);
            date.setDate(date.getDate() - (days-1) );
            query.data = { $gte: date.toISOString() };

            if (days <= 0) {
                return res.status(400).json('Errore: Valore minore di 0')
            }
        }

        if (pMese) {
            //spMese[0] = Anno
            //spMese[1] = Mese
            let spMese = pMese.split('-');
            query.data = { $gte: spMese[0] + "-" + spMese[1] + "-00", $lte: spMese[0] + "-" + spMese[1] + "-31" }
        }

        if (startDate && endDate) {
            query.data = { $gte: startDate, $lte: endDate }
        }
        else if (startDate && !endDate) {
            query.data = { $gte: startDate }
        }
        else if (endDate && !startDate) {
            query.data = { $lte: endDate }
        }
    }

    if (param) {
        param = loadBasicParams(param);
    }

    Nazione.find(query)
        .sort({ "data": -1 })
        .select(param)
        .then(nazione =>{
            return res.json(nazione)
        })
        .catch(err => res.status(400).json('Error: ') + err);
});


/**
 * Prepares must parameters for Schema#select
 * @param {*} param Parameter name in collection
 * @returns Array of strings (parameters names)
 */

function loadBasicParams(param) {
    return Array.isArray(param) ? param.concat(["data", "stato", "codice_regione", "denominazione_regione"]).join(" ") : [param, "data", "stato", "codice_regione", "denominazione_regione"].join(" ");
}


module.exports = router;