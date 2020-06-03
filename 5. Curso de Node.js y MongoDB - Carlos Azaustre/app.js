'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routes/index');

const app = express();

//Sirve para acceder al cuerpo de las peticiones
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);
module.exports = app