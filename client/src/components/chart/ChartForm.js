import React, {useState} from 'react';
import {Grid, Select, FormControl, InputLabel, MenuItem, Slider, Tooltip} from '@material-ui/core';

// Possibili regioni selezionabili all'interno del form
export const ChartForm = ({field, className, setField, setSelectedRegions, selectedRegions, addedRegion, selectedChart, setTime, time}) => {
    const regionNames = [    
        "Abruzzo",
        "Basilicata",
        "Calabria",
        "Campania",
        "Emilia-Romagna",
        "Friuli Venezia Giulia",
        "Lazio",
        "Liguria",
        "Lombardia",
        "Marche",
        "Molise",
        "Piemonte",
        "Puglia",
        "Sardegna",
        "Sicilia",
        "Toscana",
        "Umbria",
        "Valle d'Aosta",
        "Veneto",
        "P.A. Trento",
        "P.A. Bolzano"
    ];

    const now = new Date();
    const beginning = new Date('2020/02/02');
    const diffTime = Math.abs(now - beginning);
    const diffDays = -Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const [timeInDays, setTimeInDays] = useState([diffDays, 0]);

    function formatDate(d){
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        let year = String(d.getFullYear());
      
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return `${year}-${month}-${day}`;  
    }

    function valueText(value){
        let date = new Date();
        date.setDate(date.getDate()+value);
        let dateString = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

        return dateString;
    } 

    function ValueLabelComponent(props) {
        const { children, open, value } = props;
      
        return (
          <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
          </Tooltip>
        );
      }
    /**
     * @return Ritorna il form per la gestione dei dati relativi alle regioni italiane o all'intera italia.
     *         All'interno del form è possibile selezionare:
     *              - Regioni di cui visualizzare i dati (da migliorare forse con dei checkbox)
     *              - Inizio intervallo 
     *              - Fine intervallo
     *              - Dato da visualizzare
     */
    return (
        <>
            <Grid className={className} item container xs={12} lg={4} justify="center" alignItems="center" direction="column">
                {selectedChart === 'regioni' &&
                 <FormControl>
                    <InputLabel>Regione</InputLabel>
                        <Select 
                            multiple
                            id="region-selector"
                            style={{width:"10rem"}}
                            value={selectedRegions}
                            onChange={(event) => {
                                setSelectedRegions(() =>  event.target.value);
                            }}
                            MenuProps={{getContentAnchorEl: () => null}}>

                        {regionNames.map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>}

                    <InputLabel>
                        Intervallo di Tempo
                    </InputLabel>
                    <Slider
                    value={timeInDays}
                    onChange={ (event, newValue) => setTimeInDays(newValue)}
                    onChangeCommitted={(event, newValue)=>{
                        setTime(()=>{
                        let endDate = new Date();
                        let startDate = new Date();

                        endDate.setDate(endDate.getDate()+timeInDays[1]);
                        startDate.setDate(startDate.getDate()+timeInDays[0]);
                        return {
                            'date-start': formatDate(startDate),
                            'date-end': formatDate(endDate)
                            }
                        }
                    )}}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    valueLabelFormat={valueText}
                    ValueLabelComponent={ValueLabelComponent}
                    max={0}
                    min={diffDays}
                    />

                <FormControl>
                    <InputLabel htmlFor="field">Field</InputLabel>
                        <Select 
                            native
                            onChange={(event) => {
                                setField(event.target.value);
                            }}
                            inputProps={{ 
                                name: 'field',
                                id: 'field'
                            }}

                            value={field}
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
        </>
    )
}
