const router = require('express').Router();
let Regione = require("../../models/regione.model")

/**
 * /regioni/
 * /regioni/?campo=totale_positivi
 * /regioni/?mese={02-2020}
 * /regioni/?giorni={30}
 * @route api/regioni
 * @desc Get Informazioni Covid per tutte le regioni
 * @access Public
 **/
router.route('/').get((req, res) => {
    const pMese = req.query.mese || null;
    var param = req.query.campo || null;
    let days = req.query.giorni || null;
    let query = {};

    if (days) {
        let date = new Date();
        date.setDate(date.getDate() - days);
        query = { "data": { $gte: date.toISOString() } };

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

    Regione.find(query)
        .sort({ "data": 1, "denominazione_regione": 1 })
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
router.route('/:regione').get((req, res) => {
    const pMese = req.query.mese || null;
    var param = req.query.campo || null;
    let days = req.query.giorni || null;
    let query = {};

    query.denominazione_regione = req.params.regione;

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