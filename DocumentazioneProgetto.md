# Progetto pgCOVAPI

# Indice

1. [Abstract](#Abstract)
2. [Scenario e casi d'uso](#Scenario%20e%20casi%20d'uso)
3. [Open Data Covid-19](#Open%20Data%20Covid-19)
   1. [Licenza Creative Commons 4.0](#Licenza%20Creative%20Commons%204.0)
   2. [Struttura dei dati](#Struttura%20dei%20dati)
4. [Workflow Github](#Workflow%20Github)
5. [MERN Stack](#MERN%20Stack)
   1. [DBMS noSQL MongoDB](#DBMS%20noSQL%20MongoDB)
   2. [Backend (API)](#Backend%20(API))
      1. [Routes](#Routes)
      2. [Documentazione API con SwaggerUI](#Documentazione%20API%20con%20SwaggerUI)
      3. [Frontend](#Frontend)
7. [Deployment su Heroku](#Deployment%20su%20Heroku)
8. [Sicurezza](#Sicurezza)
9. [Comunicazione](#Comunicazione)
10. [Sitografia e Bigliografia](#Sitrografia%20e%20Bibliografia)

<div style="page-break-after: always; break-after: page; "></div>

## Abstract

Realizzazione di un’applicazione web composta da un sito web dinamico a pagina singola nel frontend (Single Page Application) e una API (Application Program Interface) nel backend. Il tutto sarà realizzato con il  MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
L'applicazione web permetterà di visualizzare graficamente gli Open Date ricevuti tramite l'API situata nel backend dell'applicazione che andrà ad interrogare il database MongoDB.

## Scenario e casi d'uso

## Open Data Covid-19
I dati forniti dall'API provengono dalla repository [Github della Protezione Civile](https://github.com/pcm-dpc/COVID-19) e sono successivamente importati dentro il database MongoDB Atlas. La sorgente viene aggiornata ogni giorno alle 18:30 e tramite uno script automatizzato  (scheduler) viene a sua volta aggiornato anche il database. <br>
I dati sono resi pubblici dalla Protezione Civile sotto la licenza **Creative Commmons Attribution 4.0 International**.

### Licenza Creative Commons 4.0

### Struttura dei dati

I dati provengono da due diversi file JSON: 

* [dpc-covid19-ita-andamento-nazionale.json](https://github.com/pcm-dpc/COVID-19/blob/master/dati-json/dpc-covid19-ita-andamento-nazionale.json)
* [dpc-covid19-ita-regioni.json](https://github.com/pcm-dpc/COVID-19/blob/master/dati-json/dpc-covid19-ita-regioni.json)

Il primo file riporta l'andamento nazionale: ogni oggetto rappresenta una giornata in Italia.

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

Il secondo file riporta invece i dati di ogni giornata in ogni regione.
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
* Git

**Cos'è il Controllo Versioni?**

Il controllo delle versioni aiuta gli sviluppatori a tracciare e gestire le modifiche apportate al codice di un progetto software. Con la crescita di un progetto software, il controllo delle versioni diventa uno strumento essenziale per ogni sviluppatore.<br>
Se prendiamo ad esempio un progetto come WordPress, che è un progetto piuttosto grande, per uno uno sviluppatore non è sicuro ed efficiente fargli modificare direttamente il codice sorgente.<br>
Il controllo delle versioni permette agli sviluppatori di lavorare in sicurezza utilizzando due strumenti chiamati **branching** e **merging**.<br>
Con il **branching** uno sviluppatore duplica parte del codice sorgente (chiamato **repository**). Lo sviluppatore ha duqnue la possibilità di apportare le modifiche in modo sicuro alla parte del codice senza influenzare il resto del progetto.
Per apportare le modifiche al codice sorgente "ufficiale" è necessario effettuare un **merge** ovvero l'unione di due branch distinti.<br>
Le modifiche possono poi essere monitorate e, se necessario, possono essere ripristinate.<br>



**Cos'è Git?**

Git è uno specifico sistema di controllo versioni open-data creato da Linus Torvalds nel 2005.<br>
In particolare, Git è un sistema di controllo versioni distribuito, il che significa che l'intero codice base e la coronologia sono disponibili sul computer di ogni sviluppatore.

## MERN Stack

La sigla **MERN** sta per MongoDB, ExpressJS, ReactJS, NodeJS e sono le quattro tecnologie principali che formano un'applicazione MERN

- MongoDB - DBMS
- ExpressJS - Framework WEB per NodeJS
- ReactJS - Libreria JavaScript per front-end
- NodeJS - WebServer JavaScript

Il MERN stack è una delle varianti dell'originale **MEAN** stack (MongoDB, Express, Angular, Node). Esistono altri stack come il **MENV** (MongoDB, Express, Vue, Node).

**3 Tier Architecture**
Il MERN stack permette di creare una struttura a tre livelli: Frontend, Backend, Database. Il solo linguaggio utilizzato è JavaScript e i dati vengono scambiati in formato JSON.

### DBMS noSQL MongoDB
Per lo sviluppo di questo progetto è stato deciso di utilizzare tutti quanti i componenti del **MERN** stack. E' stato dunque necessario l'impiego del database MongoDB.
Quando ci si immerge nel mondo dei database è necessario riflettere sull'uso che ne verrà fatto. Esistono infatti due tipologie di databases:
- SQL
- NoSQL
#### SQL vs NoSQL
Per spiegare la differenza è prima necessario capire il significato dei due acronimi. **SQL** ovvero *Structured Query* Language è un linguaggio rivolto all'interrogazione di dati strutturati. Pur esistendo uno standard SQL, ogni database relazionale ha le sue pecularità e la sintassi del linguaggio di interrogazione è molto simile. Questo permette infatti relativo basso costo di migrazione da un engine ad un altro.
D'altro canto abbiamo invece i database NoSQL, nella quale il prefisso "No" significa *Not Only SQL*. I database NoSQL nascono per rappresentare dati eterogenei, per il quale dover forzare una struttura causerebbe molti inconvenienti, come potrebbero essere delle query lunghe e pesanti.
#### Modelli NoSql
I database NoSql vengono classificati in base al tipo di modello utilizzato per la memorizzazione dei dati.
Esistono 4 grandi modelli di database NoSql:
- **Archivi chiave-valore** -> Il modello chiave-valore si basa su una API analoga ad una mappa, accessibile tramite chiave. Il valore che viene archiviato può contenere sia dati elementari che dati avanzati. L'utilizzo di questo modello è conveniente quando non c'è la possibilità di definire uno schema in base ai dati ed è dunque necessario un accesso veloce alle informazioni singole. Questo modello viene spesso utilizzato per memorizzare informazioni che non presentano relazioni.
- **Database orientati alle colonne** -> Questo modello si chiama in questo modo perchè i dati vengono organizzati/memorizzati per colonne in contrapposizione ai database row-oriented (orientati alle righe), che memorizzano i dati per righe successive. Ogni riga può avere un insieme di colonne diverso, in quanto vengono aggiunte quelle necessari e tolte quelle inutilizzate, evitando la presenza di valori null. Questo modello permette la compressione delle informazioni ed il versioning. Un utilizzo di questo modello è l'indicizzazionde di pagine web.
- **Database di documenti** -> Questo modello è caratterizzato da una struttura fondamentale chiamata document. Di solito il document viene scritto in JSON ed è costituito da un identificatore univoco e da un qualsiasi numero di attribuiti, che possono essere semplici o complessi. Questo modello si rivela utile quando i dati variano nel tempo, e possono mappare correttamente gli oggetti nel modello di programmazione ado oggetti. MongoDB fa parte di questa categoria di database in quanto utilizza dei file chiamati BSON. 
- **Database di grafi** -> Quest'ultimo modello memorizza dei grafi e sono utili a rappresentare dati interconnessi tra loro e possono effettuare interrogazioni utilizzando un attraversamento efficiente della struttura. Rispetto a delle normali query di altri tipi di database, è possibile velocizzare il cammino da un nodo ad un altro aggiungendo un collegamento diretto tra i due.
<br>
#### Transazioni
Uno dei cavalli di battaglia dei database relazionali sono le transazioni, della quale i database non relazionali sono generalmente sprovvisti.
Per essere definite tali, le transazioni devono rispettare le proprietà **ACID**, ovvero:
- **Atomicity**: Significa che la transazione è indivisibile nella sua esecuzione, e che tale esecuzione deve essere compleata o nulla, in modo che non esistano esecuzioni parziali.
- **Consistency**: Significa che prima di iniziare una transazione il database deve trovarsi in uno stato coerente e quando la transazione terminerà dovrà trovarsi nel medesimo stato. Un database è coerente quando non viola i vincoli di integrità del database stesso che genererebbe inconsistenza nei dati delle tabelle.
- **Isolation**: Significa che ogni transazione deve essere eseguita in modo isoltato ed indipendente da tutte quante le altre. In caso di fallimento di una transazione, essa non deve influire con le altre in esecuizione al momento.
- **Durability**: Significa che una volta che la transazione è marcata come completata, i cambiamenti che essa ha apportato sul database non dovranno perdersi, salvandoli quindi su un supporto di memoria non volatile. Le modifiche effettuate devono garantirne la leggibilità anche in caso di guasto del sistema.
<br>
Dall'altra parte troviamo invece i database non relazionali che in genere riescono a granatire l'atomicità sulla singola istruzione, indipendentemente dalla sua complessità. Per poter parlare delle proprietà che i database non relazionali devono seguire è necessario introdurre il concetto del teorema **CAP**. Il teorema CAP coinvolge i concetti di *Consistenza*,*Disponibilità di dati* e di *Tolleranza di partizione*. Queste sono le qualità desiderabili di ogni sistema sin dalla sua progettazione fino alla implementazione. Tuttavia non è possibile per un sistema informatico di calcolo distribuito di fornire simultaneamente tutte quante le carattersitiche:
- **Coerenza**: Tutti quanti i nodi del sistema vedono gli stessi dati nello stesso istante.
- **Disponibilità**: Garantire ad ogni richiesta una risposta su ciò che sia riuscito oppure fallito.
- **Tolleranza di partizone**: Garanzia che il sistema informatico continui a funzionare anche in caso di perdite di messaggi.
Secondo il teorema prima citato è infatti solamente possibile garantire al massimo due di queste caratteristiche allo stesso tempo.
Il paradigma BASE è adeguato alle applicazioni di tipo DSO (*Data Store Object*) in quanto esse non hanno lo scopo di generare transazioni.
Il modello **BASE** si compone di queste caratteristiche:
- **Basic Avability**: Il sistema deve garantire la disponibilità dei dati. In questo caso ad ogni richiesta inviata sarà necessario inviare una risposta.
- **Soft State**: Lo stato del sistema può variare nel tempo e dunque il problema della consistenza dei dati non deve essere risolto dal database, ma dallo sviluppatore che lo gestisce.
- **Eventually Consistent**: Una volta inseriti i dati nel sistema, essi si propragheranno all'interno dei nodi in modo da diventare consistenti.
Queste caratteristiche rendono evidente che l'esecuzione e la gestione delle transazioni ricada completamente sui database relazioniali.

<br>

#### Quando usare cosa
Una volta discusse le qualità di entrambe le tipologie di database è bene capirne l'utilizzo. I database relazionali trovano spazio di applicazione quando si ha a che fare con dati strutturati. Ciò vuol dire che è bene usare i database SQL quando è facilmente creabile una rappresentazione lineare su delle tabelle. Un altro aspetto da dover prendere in considerazione è la necessità della consistenza dei dati, la quale è una delle caratteristiche ACID.
<br>
D'altra parte troviamo in NoSQL i quali sono estremamente versatili nelle situazione in cui dobbiamo modellare i dati ed il polimorfismo. Se si hanno entità che tra loro portano quasi le medesime informazioni, con NoSql è possibile ovviare a tutti questi piccoli cambiamenti dove con l'SQL sarebbe stato necessario utilizzare una soluzione più complessa.
NoSql è dunque l'ideale in caso di abbondanza di dati scorrelati i quali tendono ad evolvere nel tempo. L'assenza di una struttura fissa permette di aggiunngere nuovi dati senza dover cambiare il database.



### Backend (API)

Per la realizzazione del backend, partendo dalla directory vuota del progetto, tramite la console e il comando **npm install** (fornito da nodeJS) sono stati installati tutti i moduli fondamentali per il funzionamento del lato server.

**[Axios](https://www.npmjs.com/package/axios)**: Axios è una libreria per nodeJS che permette di realizzare richieste HTTP direttamente dal codice nodeJS, sfruttando anche il meccanismo delle Promise API.
Axios permette ad esempio il funzionamento dello scheduler di aggiornamento del database, potendo richiedere i file JSON della protezione civile tramite una richiesta HTTP. Il modulo è anche il punto di collegamento tra frontend e backend, fornendo un modo per effettuare richieste all'API dal codice del frontend.

```javascript
Axios.get("https://pgcovapi.herokuapp.com/api/nazione")
            .then(function (response) {
                //do something
            })
            .catch(function (error) {
                console.log(error);
            })
```



**[Express](https://www.npmjs.com/package/express)**: Express è uno dei quattro elementi fondamentali dello stack. Il modulo è un "web application framework" utilizzato nello sviluppo di applicazioni single-page o di API pubbliche ed è in grado di fornire numerose funzionalità come:

- Routing efficiente
- Funzioni HTTP di redirect, caching etc...
- Funzioni eseguibili per la preparazione di directory per applicazioni

Express è diventato estremamente popolare semplificando notevolmente lo sviluppo di applicazioni, mettendo a disposizione metodi già pronti che nascondono la complessità del codice sottostante.

``` javascript
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```



[**Cors**](https://www.npmjs.com/package/cors): Cors è un modulo che svolge la funzione di middleware per Express e permette di abilitare il meccanismo CORS (cross-origin resource sharing), ovvero le richieste di risorse da parte di domini esterni.

```javascript
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
```



[**Dotenv**](https://www.npmjs.com/package/dotenv): Dotenv è un modulo che permette di caricare le variabili poste dentro un file **.env** all'interno di **process.env**, una variabile globale di NodeJS.
Tramite .env abbiamo potuto creare una variabile che contenesse l'indirizzo per il collegamento al database MongoDB Atlas.



**[Mongoose](https://www.npmjs.com/package/mongoose)**: Mongoose è un modulo che migliora l'interazione con MongoDB, fornendo un facile metodo di connessione e la possibilità di creare degli schemas, anche chiamati modelli.

Tramite lo URI che abbiamo salvato all'interno del process.env stabiliamo una connessione con il database.

```javascript
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Connected to MongoDB`);
});
```

In seguito si creano dei modelli che rispecchino i documenti presenti all'interno del database MongoDB, sotto è riportato un esempio dello schema Regione.

```javascript
const regioneSchema = new Schema({
    data: { type: String },
    stato: { type: String },
    codice_regione: {type: Number},
    denominazione_regione: {type: String},
    long: {type: Number},
    codice_regione: {type: Number},
    ricoverati_con_sintomi: { type: Number },
    terapia_intensiva: { type: Number },
    totale_ospedalizzati: { type: Number },
    isolamento_domiciliare: { type: Number },
    totale_positivi: { type: Number },
    variazione_totale_positivi: { type: Number },
    nuovi_positivi: { type: Number },
    dimessi_guariti: { type: Number },
    deceduti: { type: Number },
    casi_da_sospetto_diagnostico: {},
    casi_da_screening: {},
    totale_casi: { type: Number },
    tamponi: { type: Number },
    casi_testati: { type: Number },
    note: { type: String },
    ingressi_terapia_intensiva: { type: Number },
    note_test: { type: String },
    note_casi: { type: String },
    totale_positivi_test_molecolare: { type: Number },
    totale_positivi_test_antigenico_rapido: { type: Number },
    tamponi_test_molecolare: { type: Number },
    tamponi_test_antigenico_rapido: { type: Number }
})
```

Dopo aver creato un modello, Mongoose permette un'estrema semplificazione nelle interazioni con il database. Sotto è riportato il codice per una find:

```	javascript
 Nazione.find(query)
        .sort({ "data": 1 })
        .select(param)
        .then(nazione => res.json(nazione))
        .catch(err => res.status(400).json('Error: ') + err);
```



**Node-schedule**:

**Nodemon**:      

#### Routes

#### Documentazione API con SwaggerUI

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

## Deployment su Heroku



## Sicurezza



## Comunicazione



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