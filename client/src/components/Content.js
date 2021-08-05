import React from 'react';
import {Grid, Paper} from '@material-ui/core';

import './css/Content.css';

export const Content = () => {
    return (
        <>
            <Grid container className="content-wrapper" direction="row" justify="center">
                <Grid className="project" container justify="center" alignItems="center" direction="row-reverse" align = "center">
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <img className="logo-img" src="https://i.imgur.com/ihpo3UU.gif" alt="Logo"></img>
                    </Grid>
                    {/** xs, sm, md, lg, and xl **/}
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <Paper elevation={4} className="card-base">
                            <span>
                                <p className="tit">IL PROGETTO <span style={{color:"#009246"}}>pg</span><span style={{color: "white"}}>COV</span><span style={{color:"#CE2B37"}}>API</span></p>
                                Il progetto pgCOVAPI punta a creare un servizio API gratuito che permette a sviluppatori accedere ai dati COVID-19 in Italia nelle proprie applicazioni.
                                L'idea è nata come progetto da presentare alla maturità 2021.
                            </span>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container justify="center" alignItems="center" direction="row-reverse" align="center">
                    <Grid item>
                        <Paper elevation={4} className="card-base">
                            <span>
                                <p className="tit">IL TEAM DI PROGETTO</p>
                                Siamo tre ex-alunni della classe 5^C informatica all'istituto ITIS Amedeo Avogadro di Torino.
                            </span>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <div className="cardsBlock">
                            <div className="cardsContainer">
                                <div className="cardBox c1">
                                    <a href="https://github.com/IJN-Shalma" target="_blank" rel="noreferrer">
                                        <div className="card">
                                            <div style={{backgroundImage: "url('https://i.imgur.com/vBcEI6Z.png')", backgroundPosition: "center", backgroundSize: "cover"}}
                                                title="Silvio Caprara">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="cardBox c2"></div>
                                <div className="cardBox c3">
                                    <a href="https://github.com/SpacerCrownd" target="_blank" rel="noreferrer">
                                        <div className="card">
                                            <div style={{backgroundImage: "url('https://i.imgur.com/GZsyeoD.png')", backgroundPosition: "center", backgroundSize: "cover"}}
                                                title="Andrea Zhou">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="cardBox c4"></div>
                                <div className="cardBox c5">
                                    <a href="https://github.com/pabalaba" target="_blank" rel="noreferrer">
                                        <div className="card">
                                            <div style={{backgroundImage: "url('https://i.imgur.com/2QZOyUC.png')", backgroundPosition: "center", backgroundSize: "cover"}}
                                                title="Pietro Chiartano">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="cardBox c6"></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
