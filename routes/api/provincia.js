const express = require('express');
const router = express.Router();
let Provincia = require("../../models/provincia.model");

router.route('/').get((req, res) => {
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
            let date = new Date();
            date.setDate(date.getDate() - days);
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

    Provincia.find(query)
        .sort({ "data": 1, "denominazione_regione": 1, "denominazione_provincia": 1 })
        .select(param)
        .then(provincia => res.json(provincia))
        .catch(err => res.status(400).json('Error: ') + err);
});


router.route('/:provincia').get((req, res, next) => {
    const pMese = req.query.mese || null;
    let param = req.query.campo || null;
    let days = req.query.giorni || null;
    let startDate = req.query.dataInizio || null
    let endDate = req.query.dataFine || null;
    let query = {};
    query.denominazione_provincia = req.params.provincia;

    if ((days && (startDate || endDate)) || (pMese && (startDate || endDate)) || (pMese && days)) {
        return res.status(400).json('Errore: Parametri incompatibili')
    }
    else {
        if (days) {
            let date = new Date();
            date.setDate(date.getDate() - days);
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

    Provincia.find(query)
        .sort({ "data": 1, "denominazione_regione": 1, "denominazione_provincia": 1 })
        .select(param)
        .then(provincia => res.json(provincia))
        .catch(err => res.status(400).json('Error: ') + err);
});


/**
 * Prepares must parameters for Schema#select
 * @param {*} param Parameter name in collection
 * @returns Array of strings (parameters names)
 */

function loadBasicParams(param) {
    return Array.isArray(param) ? param.concat(["data", "stato", "sigla_provincia", "denominazione_provincia"]).join(" ") : [param, "data", "stato", "codice_regione", "denominazione_regione"].join(" ");
}


module.exports = router;