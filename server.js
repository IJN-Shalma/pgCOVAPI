const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const chalk = require('chalk');
const scripts = require('./scripts/updater');
const scheduler = require("node-schedule");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(chalk.green(`Connected to MongoDB`));
});

//Routes Setup
const regioniRouter = require('./routes/api/regione');
const nazioneRouter = require('./routes/api/nazione');
const rootRouter = require('./routes/api/root');

app.use('/api/regioni', regioniRouter);
app.use('/api/nazione', nazioneRouter);
app.use('/api/', rootRouter);

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Open port
app.listen(port, () =>
    console.log(chalk.green(`Server in esecuzione sulla porta: ${port}`))
);

//Job Scheduler per aggiornare i dati del database ogni ora 
const regioniJob = scheduler.scheduleJob('00 00 * * * *',  scripts.updateRegioni);
const nazioniJob = scheduler.scheduleJob('00 01 * * * *',  scripts.updateNazioni);