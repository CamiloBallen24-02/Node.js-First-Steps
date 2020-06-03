'use strict'

const mongoose = require('mongoose');

const app = require('./app');

const config = require('./config');


//Connectando a la base de datos y luego iniciando el servidor
mongoose.connect(config.db, (err, res)=>{
    if(err) throw err;
    console.log('Conexion con MongoDB establecida');

    app.listen(config.port, ()=>{
        console.log(`API REST corriendo en el puerto ${config.port}`);
    });

});

//app.get('/hola/:name', (req, res)=>{
    //    res.send({mesagge: `Hola ${req.params.name}`});
    //});