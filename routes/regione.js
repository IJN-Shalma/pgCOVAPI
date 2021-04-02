const router = require('express').Router();
let Regione = require("../models/regione.model");

router.route('/').get((req, res) => {
    Regione.find()
        .sort({data: 1 , denominazione_regione: 1})
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:regione').get((req, res) => {
    Regione.find({'denominazione_regione': req.params.regione})
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ') + err);
});


module.exports = router;