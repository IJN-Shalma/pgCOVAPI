const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

<<<<<<< Updated upstream
=======
//routes
const regioniRouter = require('./routes/api/regione');
const nazioneRouter = require('./routes/api/nazione');


>>>>>>> Stashed changes
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(chalk.green(`Connected to MongoDB`));
})


const regioniRouter = require('./routes/regione');

<<<<<<< Updated upstream
app.use('/regione', regioniRouter);
=======
//routes setup
app.use('/api/regione', regioniRouter);
app.use('/api/nazione', nazioneRouter);
>>>>>>> Stashed changes

app.listen(port, () =>
    console.log(chalk.green(`Server in esecuzione sulla porta: ${port}`))
)
