const express = require('express');
const router = express.Router();
let Provincia = require("../../models/provincia.model");

/**
 * @route api/province
 * @route /province/?campo=totale_positivi
 * @route /province/?mese={02-2020}
 * @route /province/?giorni={30}
 * @route /province/?dataInizio=2021-05-01&dataFine=2021-05-06
 * @route /province/{provincia}
 * @access Public
 **/

router.route('/').get(async (req, res) => {
    const pMese = req.query.mese || null;
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
                Provincia.find()
                    .sort({ "data": -1 })
                    .limit(1)
                    .select("data")
                    .then(provincia => { resolve(provincia[0].data) })
            })
            let date = new Date(await lastDatePromise);
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

    Provincia.find(query)
        .sort({ "data": -1, "denominazione_regione": 1, "denominazione_provincia": 1 })
        .then(provincia => res.json(provincia))
        .catch(err => res.status(400).json('Error: ') + err);
});


router.route('/:provincia').get(async (req, res, next) => {
    const pMese = req.query.mese || null;
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
            const lastDatePromise = new Promise((resolve, reject) => {
                Provincia.find()
                    .sort({ "data": -1 })
                    .limit(1)
                    .select("data")
                    .then(provincia => { resolve(provincia[0].data) })
            })
            let date = new Date(await lastDatePromise);
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

    Provincia.find(query)
        .sort({ "data": 1, "denominazione_regione": 1, "denominazione_provincia": 1 })
        .then(provincia => res.json(provincia))
        .catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;