const router = require('express').Router();
let Regione = require("../../models/regione.model")

router.route('/').get((req, res) => {
    Regione.find()
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:regione').get((req, res) => {
    const pMese = (req.query.mese) || null;


    let query = {};
    query.denominazione_regione = req.params.regione;
    if (pMese) {
        //spMese[0] = Mese
        //spMese[1] = Anno
        let spMese = pMese.split('-');
        spMese[0].length == 1 && spMese[0] < 10 ? spMese[0] = "".concat("0", spMese[0]) : null;
        query.data = { $gte: spMese[1] + "-" + spMese[0] + "-0", $lte: spMese[1] + "-" + spMese[0] + "31" }
    }



    Regione.find(query).sort({ "data": 1 })
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ') + err);
});



module.exports = router;