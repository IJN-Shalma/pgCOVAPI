import React from 'react';
import './css/Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="authors">
                <h3>Autori</h3>
                <p>Silvio Caprara</p>
                <p>Pietro Chiartano</p>
                <p>Yun Qing Zhou</p>
            </div>

            <div className="credits">
                <h3>Extra</h3>
                <p>Progetto Maturità 2021</p>
                <p>5^C Informatica IIS A. Avogadro Torino</p>
                <p>Copyright &copy; 2021</p>
            </div>
        </div>
    )
}