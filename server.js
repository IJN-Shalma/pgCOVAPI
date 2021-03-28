const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const chalk = require ('chalk');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLASURI;












