const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinciaSchema = new Schema({
    data: String,
    stato: String,
    codice_regione: Number,
    denominazione_regione: String,
    codice_provincia: Number,
    denominazione_provincia: String,
    sigla_provincia: String,
    lat: Number,
    long: Number,
    totale_casi: Number,
    note: String,
    codice_nuts_1: String,
    codice_nuts_2: String,
    codice_nuts_3: String,
});

const Provincia = mongoose.model("Provincia", provinciaSchema, "report_provincia");

module.exports = Provincia;