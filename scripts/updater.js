let Regione = require("../models/regione.model");
let Nazione = require("../models/nazione.model")
let Axios = require("axios");

/**
 * Automated Updater for the Regioni collection
 */

async function updateRegioni() {
    const lastDatePromise = new Promise((resolve, reject) => {
        Regione.find()
            .sort({ "data": -1 })
            .limit(1)
            .select("data")
            .then(regione => { resolve(regione[0].data) })
    })

    const lastDate = await lastDatePromise;
    console.log(lastDate)

    const newDataPromise = new Promise((resolve, reject) => {
        Axios.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json")
            .then(function (response) {
                result = response.data.filter((e) => e.data > lastDate);
                resolve(result);
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    const newData = await newDataPromise;

    if (newData.length > 0) {
        Regione.insertMany(newData)
            .then(() => console.log("Regione - Updated"))
            .catch((err) => console.log(err))
    }
    else {
        console.log("Regione - Already Up to Date")
    }
}

/**
 * Automated Updater for the Nazioni collection
 */
async function updateNazioni() {
    const lastDatePromise = new Promise((resolve, reject) => {
        Nazione.find()
            .sort({ "data": -1 })
            .limit(1)
            .select("data")
            .then(nazione => { resolve(nazione[0].data) })
    })

    const lastDate = await lastDatePromise;
    console.log(lastDate)

    const newDataPromise = new Promise((resolve, reject) => {
        Axios.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")
            .then(function (response) {
                result = response.data.filter((e) => e.data > lastDate);
                resolve(result);
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    const newData = await newDataPromise;

    if (newData.length > 0) {
        Nazione.insertMany(newData)
            .then(() => console.log("Nazioni - Updated"))
            .catch((err) => console.log(err))

    }
    else {
        console.log("Nazione - Already Up to Date")
    }
}

module.exports = { updateRegioni, updateNazioni };