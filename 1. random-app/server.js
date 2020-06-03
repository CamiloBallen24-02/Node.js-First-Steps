//Basado en el tutorial de: https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d

//Basado en el tutorial de: https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b


// install node.js

// in the folder of this file install express
    //npm install --save express

//Execute node server.js


//install EJS (JavaScript Embebido) para el manejo de variables
    //npm install ejs --save
    // <% CODE HERE %>
    // <%= CODE HERE ADDS HTML %>



//(Express Middleware): (functions that have access to the req and res bodies)

//Install body-parser (Express Middleware), permitira aceeder a funcione
//mas advanzadas de las que propone Express
    //npm install body-parser --save

//Llamando e instaciando modulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs') //Cargando la vista
app.use(express.static('public')); //Poder acceder a los archivos de public

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index', {number:'hola'});
})

app.post('/', function (req, res) {
    let minimo = req.body.minimo;
    let maximo = req.body.maximo;
    
    minimo = Number(minimo);
    maximo = Number(maximo);


    if(isNaN(maximo) || isNaN(minimo)){
        res.render('index', {number:'Error'});
    }
    else if(minimo >= maximo){
        res.render('index', {number:'Error'});
    }
    else{
        number_2 = Math.trunc(Math.random() * (maximo - minimo) + minimo);
        res.render('index', {number:number_2});
    }   
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})