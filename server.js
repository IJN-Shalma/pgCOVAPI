const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(chalk.green(`Connected to MongoDB`));
})


const regioniRouter = require('./routes/regione');

app.use('/regione', regioniRouter);

app.listen(port, () =>
    console.log(chalk.green(`Server in esecuzione sulla porta: ${port}`))
)









