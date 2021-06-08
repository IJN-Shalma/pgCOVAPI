import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import { HashLink as Link } from 'react-router-hash-link';
import './css/Banner.css';

/**
 * @returns Ritorna l'elemento div della pagina Home contenente alcune informazioni riguardo all'utilizzo del sito.
 *          All'interno del sito troviamo anche due bottoni:
 *              - Github => Quando cliccato porta alla repository del progetto
 *              - Documentazione => Quando cliccato porta alla documentazione swagger dell'API
 */

export const Banner = () => {

    return (
        <div className='banner-container'>
            <div className='banner-wrapper'>
                <div className="banner-content">
                    <h2 className='title'>pgCOVAPI</h2>
                    <h2 className='title'>Open Data Covid-19 in Italia</h2>
                    <p>Accedi ai dati COVID19 tramite una API ad accesso libero facile da utilizzare.<br/> Visualizza o implementa in altre applicazioni. Dati forniti dal <a href="https://github.com/pcm-dpc/COVID-19">Dipartimento di Protezione Civile</a></p>
                    <Button href="https://github.com/IJN-Shalma/pgCOVAPI" endIcon={<GitHubIcon/>} target="_blank" variant="contained" style={{margin:"1rem 1rem"}} color="primary">GitHub</Button>
                    <Button href="https://ijn-shalma.github.io/pgCOVAPI/" endIcon={<DescriptionIcon/>} target="_blank" variant="contained" color="primary">Documentazione API</Button>
                </div>
            </div>

            <div className='down-button' href="#main">
                <Link to="#main"><i className="fas fa-angle-double-down" ></i></Link>
            </div>
        </div>
    )
}