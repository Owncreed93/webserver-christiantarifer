'use strict';

// * PACKAGE FROM NODEJS CREATES A SERVER
const http = require('http');

// * CREATE A SERVER WITH REQUESTS AND RESPONSES
http.createServer((req, res) => {

        // * SERVER RESPONSE JSON TYPE
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Christian Gerson',
            edad: 26,
            url: req.url
        }

        //* SERVER RESPONSE TRANSFORMS A JSON FILE TO A STRING TYPE
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();
    })
    .listen(8080); //* LISTEN TO AN SPECIFIC PORT

console.log('Escuchando el puerto 8080');