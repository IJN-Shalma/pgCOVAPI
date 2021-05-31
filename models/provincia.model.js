const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinciaSchema = new Schema({
    data: { type: String },
    stato: { type: String },
    codice_regione: { type: Number },
    denominazione_regione: { type: String },
    codice_provincia: { type: Number },
    denominazione_provincia: { type: String },
    sigla_provincia: { type: String },
    lat: { type: Number },
    long: { type: Number },
    totale_casi: { type: Number },
    note: { type: String },
    codice_nuts_1: { type: String },
    codice_nuts_2: { type: String },
    codice_nuts_3: { type: String },
});

const Provincia = mongoose.model("Provincia", provinciaSchema, "report_provincia");

module.exports = Provincia;