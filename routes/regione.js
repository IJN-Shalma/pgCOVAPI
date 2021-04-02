const router = require('express').Router();
let Regione = require("../models/regione.model")

router.route('/').get((req, res) => {
    Regione.find()
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:regione').get((req, res) => {

    const periodo = (req.query.mese).split('-') || null;
    //periodo[0] = mese
    //periodo[1] = anno

    Regione.find(
        { 'denominazione_regione': req.params.regione },
        { 'data': new Date(periodo[1] + "-" + periodo[0]) })
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ') + err);
});



module.exports = router;