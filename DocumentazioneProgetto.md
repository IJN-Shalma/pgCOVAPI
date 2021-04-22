# Progetto pgCOVAPI

# Indice

1. [Abstract](#Abstract)
2. [Scenario e casi d'uso](#Scenario%20e%20casi%20d'uso)
3. [Open Data Covid-19](#Open%20Data%20Covid-19)
4. [Workflow Github](#Workflow%20Github)
5. [MERN Stack](#MERN%20Stack)

   1. [DBMS noSQL MongoDB](#DBMS%20noSQL%20MongoDB)
   2. [Backend (API)](#Backend%20(API))
6. [Documentazione API con SwaggerUI](#Documentazione%20API%20con%20SwaggerUI)
      
7. [Frontend](#Frontend)
   1. [Deployment su Heroku](#Deployment%20su%20Heroku)
   
8. [Sicurezza](#Sicurezza)
9. [Comunicazione](#Comunicazione)
10. [Sitografia e Bigliografia](#Sitrografia%20e%20Bibliografia)

<div style="page-break-after: always; break-after: page; "></div>

## Abstract

Realizzazione di un’applicazione web composta da un sito web dinamico a pagina singola nel frontend (Single Page Application) e una API (Application Program Interface) nel backend. Il tutto sarà realizzato con il  MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
L'applicazione web permetterà di visualizzare graficamente gli Open Date ricevuti tramite l'API situata nel backend dell'applicazione che andrà ad interrogare il database MongoDB.
<br>

## Open Data Covid-19
I dati forniti dall'API provengono dalla repository [Github della Protezione Civile](https://github.com/pcm-dpc/COVID-19) e sono successivamente importati dentro il database MongoDB Atlas. La sorgente viene aggiornata ogni giorno alle 18:30 e tramite uno script automatizzato  (scheduler) viene a sua volta aggiornato anche il database. <br>
I dati sono resi pubblici dalla Protezione Civile sotto la licenza [Creative Commmons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode.it).

<br>

**Struttura dei dati**
I dati provengono da due diversi file JSON: 

* [dpc-covid19-ita-andamento-nazionale.json](https://github.com/pcm-dpc/COVID-19/blob/master/dati-json/dpc-covid19-ita-andamento-nazionale.json)
* [dpc-covid19-ita-regioni.json](https://github.com/pcm-dpc/COVID-19/blob/master/dati-json/dpc-covid19-ita-regioni.json)

Il primo file riporta l'andamento nazionale: ogni oggetto rappresenta una giornata.

``` javascript
// Esempio - 27 Marzo 2021 - Dati in Italia
{
    "_id": "6060a81c60b0830e3080d028",
    "data": "2021-03-27T17:00:00",
    "stato": "ITA",
    "ricoverati_con_sintomi": 28621,
    "terapia_intensiva": 3635,
    "totale_ospedalizzati": 32256,
    "isolamento_domiciliare": 539622,
    "totale_positivi": 571878,
    "variazione_totale_positivi": 5167,
    "nuovi_positivi": 23839,
    "dimessi_guariti": 2832939,
    "deceduti": 107636,
    "casi_da_sospetto_diagnostico": null,
    "casi_da_screening": null,
    "totale_casi": 3512453,
    "tamponi": 48820663,
    "casi_testati": 22628158,
    "note": null,
    "ingressi_terapia_intensiva": 264,
    "note_test": null,
    "note_casi": null,
    "totale_positivi_test_molecolare": 3405661,
    "totale_positivi_test_antigenico_rapido": 106792,
    "tamponi_test_molecolare": 39659217,
    "tamponi_test_antigenico_rapido": 9161446
}
```

Il secondo file riporta invece i dati di ogni giornata in ogni regione
```javascript
// Esempio - 27 Marzo 2021 - Dati Regione Piemonte
{
  "data": "2021-03-27T17:00:00",
  "stato": "ITA",
  "codice_regione": 1,
  "denominazione_regione": "Piemonte",
  "lat": 45.0732745,
  "lon": 7.680687483,
  "ricoverati_con_sintomi": 3767,
  "terapia_intensiva": 360,
  "totale_ospedalizzati": 4127,
  "isolamento_domiciliare": 31458,
  "totale_positivi": 35585,
  "variazione_totale_positivi": 450,
  "nuovi_positivi": 2636,
  "dimessi_guariti": 256309,
  "deceduti": 10180,
  "casi_da_sospetto_diagnostico": null,
  "casi_da_screening": null,
  "totale_casi": 302074,
  "tamponi": 3231331,
  "casi_testati": 1484100,
  "note": null,
  "ingressi_terapia_intensiva": 27,
  "note_test": null,
  "note_casi": null,
  "totale_positivi_test_molecolare": 288766,
  "totale_positivi_test_antigenico_rapido": 13308,
  "tamponi_test_molecolare": 2350377,
  "tamponi_test_antigenico_rapido": 880954,
  "codice_nuts_1": "ITC",
  "codice_nuts_2": "ITC1"
}
```



## Workflow Github

GitHub è un servizio web e cloud-based che aiuta gli sviluppatori ad archiviare e gestire il loro codice e a tracciare e controllare le modifiche.<br>
Per capire meglio cosa è GitHub è necessario introdurre due principi collegati:

* Controllo versioni
* Git<br><br>

**Cos'è il Controllo Versioni?**<br>
Il controllo delle versioni aiuta gli sviluppatori a tracciare e gestire le modifiche apportate al codice di un progetto software. Con la crescita di un progetto software, il controllo delle versioni diventa uno strumento essenziale per ogni sviluppatore.<br>
Se prendiamo ad esempio un progetto come WordPress, che è un progetto piuttosto grande, per uno uno sviluppatore non è sicuro ed efficiente fargli modificare direttamente il codice sorgente.<br>
Il controllo delle versioni permette agli sviluppatori di lavorare in sicurezza utilizzando due strumenti chiamati **branching** e **merging**.<br>
Con il **branching** uno sviluppatore duplica parte del codice sorgente (chiamato **repository**). Lo sviluppatore ha duqnue la possibilità di apportare le modifiche in modo sicuro alla parte del codice senza influenzare il resto del progetto.
Per apportare le modifiche al codice sorgente "ufficiale" è necessario effettuare un **merge** ovvero l'unione di due branch distinti.<br>
Le modifiche possono poi essere monitorate e, se necessario, possono essere ripristinate.<br><br>

**Cos'è Git?**<br>
Git è uno specifico sistema di controllo versioni open-data creato da Linus Torvalds nel 2005.<br>
In particolare, Git è un sistema di controllo versioni distribuito, il che significa che l'intero codice base e la coronologia sono disponibili sul computer di ogni sviluppatore.<br><br>

## MERN Stack

sLa sigla **MERN** sta per MongoDB, ExpressJS, ReactJS, NodeJS e sono le quattro tecnologie principali che formano un'applicazione MERN

- MongoDB - DBMS
- ExpressJS - Framework WEB per NodeJS
- ReactJS - Libreria JavaScript per front-end
- NodeJS - WebServer JavaScript

Il MERN stack è una delle varianti dell'originale **MEAN** stack (MongoDB, Express, Angular, Node). Esistono altri stack come il **MENV** (MongoDB, Express, Vue, Node).

**3 Tier Architecture**
Il MERN stack permette di creare una struttura a tre livelli: Frontend, Backend, Database. Il solo linguaggio utilizzato è JavaScript e i dati vengono scambiati in formato JSON.

### DBMS noSQL MongoDB

### Backend (API)

Per lo sviluppo del backend è stato è stato definito il file **server.js** e sono state installate all'interno della directory del progetto le prime dipendenze fondamentali che avremmo utilizzato in seguito:

- Axios: Axios 
- Cors
- Dotenv
- Express
- Mongoose
- Node-schedule
- Nodemon

#### Routes

#### Documentazione API con SwaggerUI


<br>

### Frontend

Il frontend, ovvero il lato dell'applicativo che è visibile ed intergaisce con l'utente, è realizzato tramite React js, un framework che permette di realizzare Single Page Applications, il quale obiettivo è quello di offrire una esperienza di navigazione più fluida, similmente a un'applicazione desktop.

Questo è possibile perché in una SPA, il server invia al client tutto il codice necessario al funzionamento della pagina web, cioé una pagina HTML, CSS e una serie di file JavaScript che si occupano di interagire con l'utente ed aggiornare i vari componenti della pagina dinamicamente, senza dover chiedere al server di rerenderizzare l'intera pagina come avviene in pagine dinamiche tradizionali scritti in linguaggi come PHP.
Ulteriori risorse, come ad esempio dati conservati in un database, vengono richieste dinamicamente al web server senza dover interrompere la navigazione.

React ci permette di creare intefacce utente componibili, ovvero formati da vari "componenti" che possono rappresentare dati che cambiano nel tempo, aggiornandosi automaticamente, infatti ogni componente possiede un proprio stato interno, e al suo cambiamento si aggiornerà.

Tramite i componenti si possono creare diverse viste in base alla route, o URL, inserita dall'utente, simulando lo spostamento tra pagine diverse, renderizzando solo i componenti che cambiano, infatti solitamente nelle applicazioni React abbiamo diversi componenti che rimangono costanti come ad esempio la nav bar o la barra di ricerca.

(**bozza**: Per far ciò, React utilizza il Virtual DOM invece di operare direttamente sul DOM reale. Il Virtual DOM è un'astrazione del DOM. Si tratta di una rappresentazione in memoria del DOM. È veloce e indipendente dalle specifiche implementazioni del browser. Possiamo pensare al Virtual DOM come una copia in memoria del DOM reale.
Quando avviene una variazione dei dati all'interno dell'applicazione (per esempio cambia lo stato e le informazioni contenute in un componente), React effettua le modifiche sul Virtual DOM e lo aggiorna per rispecchiare i cambiamenti avvenuti.
React calcola poi la differenza tra le due rappresentazioni del Virtual DOM, ovvero fra la rappresentazione del Virtual DOM prima che i dati venissero modificati e l'attuale rappresentazione del Virtual DOM (dopo la modifica dei dati all'interno dell'applicazione). La differenza tra le due rappresentazioni del Virtual DOM, è ciò che deve essere cambiato nel DOM reale.
A questo punto, React effettua le modifiche nel DOM reale, aggiornando solo ed esclusivamente quello che deve essere cambiato.
Utilizzando questa tecnica, si riescono a ottenere prestazioni elevate che permettono alla nostra applicazione di funzionare in maniera veloce.)
<br>

### Deployment su Heroku

Text
<br>

## Sicurezza

Text
<br>

## Comunicazione

Text
<br>

## Sitografia e Bibliografia

* [Documentazione MongoDB](https://docs.mongodb.com/manual/)<br>
* [Documentazione Heroku](https://devcenter.heroku.com/categories/reference)<br>
* [Documentazione ReactJS](https://it.reactjs.org/docs/getting-started.html)<br>
* [Documentazione ExpressJS](https://expressjs.com/it/api.html)<br>
* [Documentazione NodeJS](https://nodejs.org/it/docs/)<br>
* [Documentazione CorsJS](https://developer.mozilla.org/it/docs/Web/HTTP/CORS)<br>
* [Documentazione Moongose](https://mongoosejs.com/docs/)<br>
* [Documentazione ChalkJS](https://www.npmjs.com/package/chalk)<br>
* [Documentazione SchedulerJS](https://www.npmjs.com/package/scheduler)<br>
* [Documentazione Swagger V3](https://swagger.io/docs/specification/about/)<br>
* [Documentazione Github](https://guides.github.com/introduction/git-handbook/)<br>
* [Documentazione Github Desktop](https://docs.github.com/en/desktop)<br>
