import React from 'react';
import {Grid,Button} from '@material-ui/core';

export const ChartSelect = ({onClick}) => {
    return (
        <>
            <Grid container item xs={12} justify="center" alignItems="center" className="chart-select">
                <Button variant="contained" style={{margin:"1rem 1rem"}} color="primary" onClick={() => onClick("nazione")}>Grafico Andamento Nazionale</Button>
                <Button variant="contained" style={{margin:"1rem 1rem"}} color="primary" onClick={()=>onClick("regioni")}>Grafico Andamento Regionale</Button>
            </Grid>
        </>
    )
}
