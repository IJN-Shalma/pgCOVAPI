const router = require('express').Router();
<<<<<<< Updated upstream:routes/regione.js
let Regione = require("../models/regione.model")
=======
let Regione = require("../../models/regione.model");
>>>>>>> Stashed changes:routes/api/regione.js

router.route('/').get((req, res) => {
    Regione.find()
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:regione').get((req, res) => {
    Regione.find({'denominazione_regione': req.params.regione})
        .then(regione => res.json(regione))
        .catch(err => res.status(400).json('Error: ') + err);
});


module.exports = router;