const express = require('express');
const router = express.Router();
let Nazione = require("../../models/nazione.model");

router.route('/').get((req, res) => {
    Nazione.find()
        .sort({data: 1 , denominazione_regione: 1})
        .then(nazione => res.json(nazione))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;