import React from 'react';
import {TextField, Grid, Select, FormControl, InputLabel} from '@material-ui/core';

export const NationForm = ({field, className, setDateStart, setDateEnd, setField}) => {
    return (
        <>
            <Grid className={className} item container xs={12} lg={4} justify="center" alignItems="center" direction="column">
                    <TextField 
                        id="date-start" 
                        label="Inizio intervallo" 
                        defaultValue=""
                        onChange={(event) => {
                            setDateStart(event.target.value);
                        }}
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
