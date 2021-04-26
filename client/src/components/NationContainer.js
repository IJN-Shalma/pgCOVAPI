import React, {useEffect,useState} from 'react';
import {Chart} from './Chart';
import {Loading} from './Loading'
import {trackPromise} from 'react-promise-tracker';
import {TextField, Grid, Select, FormControl, InputLabel} from '@material-ui/core';

import './css/NationContainer.css';

export const NationContainer = () => {
    const [json, setJson] = useState([]);
    const [dateEnd, setDateEnd] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [field, setField] = useState("totale_positivi");

    useEffect(() => {
        /* let isCancelled = false; // */
        let url = "https://pgCOVAPI.herokuapp.com/api/nazione/?";

        if(dateStart && dateEnd){
            url = url.concat("dataInizio=" + dateStart).concat("&dataFine=" + dateEnd);
        }

        if(field){
            url = url.concat("&campo=" + field);
        }

        console.log(url)
        //track fetch status using custom hook
        trackPromise(
            fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
            })
            .then((jsonData) => {
                /* if(!isCancelled){
                    setJson(jsonData);
                }; */

                setJson(jsonData);
            })
        );

        /* return () => { isCancelled = true }; */
    }, [field, dateStart, dateEnd]);

    return (
        <Grid container className="nation-container">
            <Grid item xs={12} lg={8} className = "chart-container" >
                <Loading/>
                <Chart data={json} campo={field}/>
            </Grid>
 
            <Grid item container xs={12} lg={4} justify="center" alignItems="center" direction="column">
                    <TextField 
                        id="date-start" 
                        label="Inizio intervallo" 
                        defaultValue=""
                        onChange={(event) => {
                            setDateStart(event.target.value);
                        }}
                        on
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        y={1}
                    />

                    <TextField 
                        id="date-end" 
                        label="Fine intervallo" 
                        defaultValue=""
                        onChange={(event) => {
                            setDateEnd(event.target.value);
                        }}
                        type="date" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        y={1}
                    />
                    <FormControl>
                        <InputLabel htmlFor="field">field</InputLabel>
                        <Select 
                            native
                            onChange={(event) => {
                                setField(event.target.value);
                            }}
                            inputProps={{ 
                                name: 'field',
                                id: 'field'
                            }}
                        >
                            <option value="totale_positivi">Totale Positivi</option>
                            <option value="ricoverati_con_sintomi">Ricoverati con Sintomi</option>
                            <option value="terapia_intensiva">Terapia Intensiva</option>
                            <option value="totale_ospedalizzati">Totale Ospedalizzati</option>
                            <option value="isolamento_domiciliare">Isolamento Domiciliare</option>
                            <option value="variazione_totale_positivi">Variazione Totale Positivi</option>
                            <option value="nuovi_positivi">Nuovi Positivi</option>
                            <option value="dimessi_guariti">Dimessi Guariti</option>
                            <option value="deceduti">Deceduti</option>
                            <option value="totale_casi">Totale Casi</option>
                            <option value="tamponi">Tamponi</option>
                            <option value="casi_testati">Casi Testati</option>
                            <option value="ingressi_terapia_intensiva">Ingerssi in Terapia Intensiva</option>
                            <option value="totale_positivi_test_molecolare">Totale Positivi Test Molecolare</option>
                            <option value="totale_positivi_test_antigenico_rapido">Totale Positivi Test Antigenico Rapido</option>
                            <option value="tamponi_test_molecolare">Tamponi Test Molecolare</option>
                            <option value="tamponi_test_antigenico_rapido">Tamponi Test Antigenico Rapido</option>
                        </Select>
                    </FormControl>
            </Grid>
        </Grid>
    )
}