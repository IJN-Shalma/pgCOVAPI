import React from 'react';
import Button from '@material-ui/core/Button';
import './css/Banner.css';

export const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-wrapper'>
                <div className="banner-content">
                    <h2 className='title'>pgCOVAPI</h2>
                    <h2 className='title'>Open Data Covid-19 in Italia</h2>
                    <p>API OPEN DATA GRATUITO, SEMPLICE E INTUITIVO</p>
                    <Button href="https://github.com/IJN-Shalma/pgCOVAPI" target="_blank" variant="contained" style={{margin:"1rem 1rem"}} color="primary">GitHub</Button>
                    <Button href="https://ijn-shalma.github.io/pgCOVAPI/" target="_blank" variant="contained" color="primary">Documentazione API</Button>
                </div>
            </div>

            <div className='down-button'>
                <i className="fas fa-angle-double-down"></i>
            </div>
        </div>
    )
}