import React from 'react';
import {Grid,Button} from '@material-ui/core';

export const ChartSelect = ({onClick}) => {
    /**
     * @return Ritorna una grid contenente due bottoni:
     *              - Grafico Andamento Nazionale => Mostra i dati del covid di tutta Italia
     *              - Grafico Andamento Regionale => Mostra i dati del covid relativi alle singole regioni d'Italia selezionate nel RegionForm
     */
    return (
        <>
            <Grid container item xs={12} justify="center" alignItems="center" className="chart-select">
                <Button variant="contained" style={{margin:"1rem 1rem"}} color="primary" onClick={() => onClick("nazione")}>Grafico Andamento Nazionale</Button>
                <Button variant="contained" style={{margin:"1rem 1rem"}} color="primary" onClick={()=>onClick("regioni")}>Grafico Andamento Regionale</Button>
            </Grid>
        </>
    )
}
