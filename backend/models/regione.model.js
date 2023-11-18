const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regioneSchema = new Schema({
    data: String,
    stato: String,
    codice_regione: Number,
    denominazione_regione: String,
    lat: Number,
    long: Number,
    ricoverati_con_sintomi: Number,
    terapia_intensiva: Number,
    totale_ospedalizzati: Number,
    isolamento_domiciliare: Number,
    totale_positivi: Number,
    variazione_totale_positivi: Number,
    nuovi_positivi: Number,
    dimessi_guariti: Number,
    deceduti: Number,
    casi_da_sospetto_diagnostico: {},
    casi_da_screening: {},
    totale_casi: Number,
    tamponi: Number,
    casi_testati: Number,
    note: String,
    ingressi_terapia_intensiva: Number,
    note_test: String,
    note_casi: String,
    totale_positivi_test_molecolare: Number,
    totale_positivi_test_antigenico_rapido: Number,
    tamponi_test_molecolare: Number,
    tamponi_test_antigenico_rapido: Number
})

const Regione = mongoose.model("Regione", regioneSchema, "report_regione");

module.exports = Regione;