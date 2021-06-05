# pgCOVAPI - Progetto esame di maturità 2021 

> pgCOVAPI mette a disposizione un servizio Web API pubblico che permette di accedere agli Open Data COVID-19 pubblicati sulla repository Github del Dipartimento di Protezione Civile. Tramite il sito Web è possibile visualizzare i dati forniti dal servizio elaborati in forma grafica.


## Applicazione pgCOVAPI
### Sito Web - https://pgcovapi.herokuapp.com
Il sito web è raggiungibile da chiunque. Il suo scopo è solamente mostrare le informazioni elaborate in forma grafica (attualmente disponibili Grafici e Mappa).

![front-end-website](https://i.imgur.com/nDfON2N.png)

### Servizio API - https://pgcovapi.herokuapp.com/api/
Il servizio API è anche esso pubblico. Ricava i dati dal database MongoDB Atlas e li restituisce al richiedente in formato JSON. Tutti i percorsi e i filtri applicabili sono descritti nella documentazione API.
### Documentazione API - https://ijn-shalma.github.io/pgCOVAPI
La documentazione API, realizzata con SwaggerUI, descrive i diversi percorsi  del servizio e ne elenca tutti i parametri disponibili. Dalla pagina è possibile costruire e provare il funzionamento dell'API.

![front-end-apidoc](https://i.imgur.com/umYDOdq.png)

## Team di progetto: 
[Silvio Caprara:](https://github.com/IJN-Shalma) Capo progetto, Sviluppatore - Backend

[Pietro Chiartano:](https://github.com/pabalaba) Sviluppatore - Database Admininistrator

[Yun Qing Zhou:](https://github.com/SpacerCrownd) Sviluppatore - Frontend

## Tecnologie utilizzate

La realizzazione dell'applicazione web e del servizio è stata affrontata con l'utilizzo del **MERN** stack. 

 - [MongoDB](https://docs.mongodb.com/): DBMS non relazionale.
 - [ExpressJS](https://expressjs.com/it/4x/api.html): Framework back-end per NodeJS.
 - [ReactJS](https://it.reactjs.org/docs/getting-started.html): Libreria di front-end.
 - [NodeJS](https://nodejs.org/it/docs/): Ambiente di runtime dell'applicazione.

## I dati
I dati utilizzati all'interno dell'applicazione provengono dal Dipartimento di Protezione Civile Italiana. Sono distribuiti sotto forma di Open-Data e quindi di libero accesso (sotto licenza [Creative Commons 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode.it)). 

[Repository GitHub](https://github.com/pcm-dpc/COVID-19) della Protezione Civile Italiana

Per la creazione della mappa interattiva sono stati utilizzati dei file .geojson contenenti i limiti delle province italiane. Sono anche essi dati facenti parte di una [repository pubblica di Github](https://github.com/openpolis/geojson-italy/tree/master/geojson).


## GitHub Tree
```
├── client
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── Banner.js
│       │   ├── chart
│       │   │   ├── Chart.js
│       │   │   ├── ChartContainer test.js
│       │   │   ├── ChartContainer.js
│       │   │   ├── ChartForm.js
│       │   │   ├── ChartSelect.js
│       │   │   └── Loading.js
│       │   ├── css
│       │   │   ├── Banner.css
│       │   │   ├── Chart.css
│       │   │   ├── ChartContainer.css
│       │   │   ├── DataCarousel.css
│       │   │   ├── Features.css
│       │   │   ├── Footer.css
│       │   │   ├── images
│       │   │   │   └── bg2.jpg
│       │   │   ├── Loading.css
│       │   │   └── Navbar.css
│       │   ├── DataCarousel.js
│       │   ├── Footer.js
│       │   ├── map
│       │   │   ├── data
│       │   │   │   └── limits_IT_provinces.json
│       │   │   ├── Map.css
│       │   │   └── Map.js
│       │   └── Navbar.js
│       ├── index.css
│       ├── index.js
│       └── logo.svg
├── docs
├── DocumentazioneProgetto.md
├── models
│   ├── nazione.model.js
│   ├── provincia.model.js
│   └── regione.model.js
├── package-lock.json
├── package.json
├── routes
│   └── api
│       ├── nazione.js
│       ├── province.js
│       ├── regione.js
│       └── root.js
├── scripts
│   └── updater.js
├── README.md
└── server.js
```
