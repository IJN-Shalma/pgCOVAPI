import React from 'react';
import {Grid,Button} from '@material-ui/core';

export const ChartSelect = ({onClick}) => {
    return (
        <>
            <Grid item xs={12} className="chart-select">
                <Button variant="contained" style={{margin:"1rem 1rem"}} color="primary" onClick={() => onClick("nazione")}>Grafico Andamento Nazionale</Button>
                <Button variant="contained" color="primary" onClick={()=>onClick("regioni")}>Grafico Andamento Regionale</Button>
            </Grid>
        </>
    )
}
