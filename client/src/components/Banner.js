import React from 'react';
import './css/Banner.css';

export const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <h2 className='title'>pgCOVAPI</h2>
                <h2 className='title'>Open Data Covid-19 in Italia</h2>
                <p>API OPEN DATA GRATUITO, SEMPLICE E INTUITIVO</p>
            </div>

            <div className='down-button'>
                <i className="fas fa-angle-double-down"></i>
            </div>
        </div>
    )
}