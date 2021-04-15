let Regione = require("../models/regione.model");
let Axios = require("axios");
let fs = require("fs")

async function updateRegioni() {


    const lastDatePromise = new Promise((resolve, reject) => {
        Regione.find()
            .sort({ "data": -1 })
            .limit(1)
            .select("data")
            .then(nazione => { resolve(nazione[0].data) })
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
            .then(() => console.log("Updated"))
            .catch((err) => console.log(err))
    }
    else {
        console.log("Already Up to Date")
    }
}

module.exports = { updateRegioni };