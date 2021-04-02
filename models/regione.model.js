const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regioneSchema = new Schema({
    data: { type: String },
    stato: { type: String },
    codice_regione: { type: Number },
    denominazione_regione: { type: String },
    lat: { type: Number },
    long: { type: Number },
    ricoverati_con_sintomi: { type: Number },
    terapia_intensiva: { type: Number },
    totale_ospedalizzati: { type: Number },
    isolamento_domiciliare: { type: Number },
    totale_positivi: { type: Number },
    variazione_totale_positivi: { type: Number },
    nuovi_positivi: { type: Number },
    dimessi_guariti: { type: Number },
    deceduti: { type: Number },
    casi_da_sospetto_diagnostico: { type: Number },
    casi_da_screening: { type: Number },
    totale_casi: { type: Number },
    tamponi: { type: Number },
    casi_testati: { type: Number },
    note: { type: String },
    ingressi_terapia_intensiva: { type: Number },
    note_test: { type: String },
    note_casi: { type: String },
    totale_positivi_test_molecolare: { type: Number },
    totale_positivi_test_antigenico_rapido: { type: Number },
    tamponi_test_molecolare: { type: Number },
    tamponi_test_antigenico_rapido: { type: Number },
    codice_nuts_1: { type: String },
    codice_nuts_2: { type: String }
})

const Regione = mongoose.model("Regione", regioneSchema, "report_regione");

module.exports = Regione;