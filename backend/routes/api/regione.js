const router = require('express').Router();
let Regione = require("../../models/regione.model")

/**
 * @route api/regioni
 * @route /regioni/?campo=totale_positivi
 * @route /regioni/?mese={02-2020}
 * @route /regioni/?giorni={30}
 * @route /regioni/?dataInizio=2021-05-01&dataFine=2021-05-06
 * @route /regioni/{regione}
 * @desc Get Informazioni Covid per tutte le regioni
 * @access Public
 **/
router.route('/').get(async (req, res) => {
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
                Regione.find()
                    .sort({ "data": -1 })
                    .limit(1)
                    .select("data")
                    .then(regione => { resolve(regione[0].data) })
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

    if (param) {
        param = loadBasicParams(param);
    }

    Regione.find(query)
        .sort({ "data": -1, "denominazione_regione": 1 })
        .select(param)
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * /regioni/{Piemonte}/
 * /regioni/{Piemonte}/{totale_positivi}
 * /regioni/{Piemonte}/?mese={02-2020}
 * /regioni/{Piemonte}/?giorni={30}
 * @route api/regioni
 * @desc Get Informazioni Covid per regione
 * @access Public
*/
router.route('/:regione').get(async (req, res, next) => {
    const pMese = req.query.mese || null;
    let param = req.query.campo || null;
    let days = req.query.giorni || null;
    let startDate = req.query.dataInizio || null
    let endDate = req.query.dataFine || null;
    let query = {};
    query.denominazione_regione = req.params.regione;

    if ((days && (startDate || endDate)) || (pMese && (startDate || endDate)) || (pMese && days)) {
        return res.status(400).json('Errore: Parametri incompatibili')
    }
    else {
        if (days) {
            const lastDatePromise = new Promise((resolve, reject) => {
                Regione.find()
                    .sort({ "data": -1 })
                    .limit(1)
                    .select("data")
                    .then(regione => { resolve(regione[0].data) })
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

    if (param) {
        param = loadBasicParams(param);
    }

    Regione.find(query)
        .sort({ "data": 1, "denominazione_regione": 1 })
        .select(param)
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ') + err);
});

function loadBasicParams(param) {
    return Array.isArray(param) ? param.concat(["data", "stato", "codice_regione", "denominazione_regione"]).join(" ") : [param, "data", "stato", "codice_regione", "denominazione_regione"].join(" ");
}


module.exports = router;