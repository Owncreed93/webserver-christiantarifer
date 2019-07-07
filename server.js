'use strict';

// * IMPORT EXPRESS 
const express = require('express');

const app = express();

// * IMPORT HBS
const hbs = require('hbs');

// * GET SERVER(IN PRODUCTION) PORT
const port = process.env.PORT || 3000;

// * MIDDLEWARE -> STATIC CONFIGURATION
app.use(express.static(__dirname + '/public'));

// * CREATE PARTIALS FOLDER
hbs.registerPartials(__dirname + '/views/parciales');

// * EXPRESS HBS ENGINE - HBS DEFAULT CONFIGURATION
app.set('view engine', 'hbs');

// * IMPORT HELPERS
require('./hbs/helpers');

// * EXPRESS BASIC CONFIGURATION
app.get('/', (req, res) => {
    //res.send('Hola Mundo');


    // * EXPRESS LET YOU RENDER PAGES HBS
    res.render('home', {
        nombre: 'chrIStian tariFeño',
        anio: new Date().getFullYear()
    });


})

app.get('/about', (req, res) => {
    res.render('about', {
        titulo: 'Los 7 Pecados Capitales',
        anio: new Date().getFullYear()
    })
})


// * SECOND SERVICE CONFIGURATION
app.get('/data', (req, res) => {
    res.send('Hola data');
})

// * listen() -> FUNCTION ALSO SUPPORTS CALLBACKS AND WILL BE TRIGGERED WHEN THE APPLICATION IS LAUNCHED
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto  ${ port }`);
});