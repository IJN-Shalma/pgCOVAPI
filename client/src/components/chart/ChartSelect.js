import React from 'react';
import {Grid,Button} from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export const ChartSelect = ({onClick}) => {
    /**
     * @return Ritorna una grid contenente due bottoni:
     *              - Grafico Andamento Nazionale => Mostra i dati del covid di tutta Italia
     *              - Grafico Andamento Regionale => Mostra i dati del covid relativi alle singole regioni d'Italia selezionate nel RegionForm
     */
    return (
        <>
            <Grid container item xs={12} justify="center" alignItems="center" className="chart-select">
                <Button variant="contained" style={{margin:".5rem .5rem",color:"white"}} color="primary" onClick={() => onClick("nazione")} endIcon={<ShowChartIcon/>}>Grafico Andamento Nazionale</Button>
                <Button variant="contained" style={{margin:".5rem .5rem",color:"white"}} color="primary" onClick={() => onClick("regioni")} endIcon={<ShowChartIcon/>}>Grafico Andamento Regionale</Button>
            </Grid>
        </>
    )
}
