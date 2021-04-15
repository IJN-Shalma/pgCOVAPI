const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');
const scripts = require('./scripts/updater')
const scheduler = require("node-schedule")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//routes import
const regioniRouter = require('./routes/api/regione');
const nazioneRouter = require('./routes/api/nazione');

app.use(cors());
app.use(express.json());

//DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(chalk.green(`Connected to MongoDB`));
   
});

//routes setup
app.use('/api/regioni', regioniRouter);
app.use('/api/nazione', nazioneRouter);

app.listen(port, () =>
    console.log(chalk.green(`Server in esecuzione sulla porta: ${port}`))
)

const job = scheduler.scheduleJob('00 00 * * * *',  scripts.updateRegioni);