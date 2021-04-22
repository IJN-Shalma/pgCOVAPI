import React from 'react';
import './css/Banner.css';

export const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <h2 className='title'>pgCOVAPI</h2>
                <h2 className='title'>Open Data Covid-19 in Italia</h2>
                <p>API open data gratuito, semplice e intuitivo</p>
            </div>

            <div className='down-button'>
                <i className='far fa-arrow-alt-circle-down' href=''/>
            </div>
        </div>
    )
}