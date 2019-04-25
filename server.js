// set up ======================================================================
const express = require('express');
const chalk = require('chalk'); // to help visualize errors with colors
const debug = require('debug')('app'); // cross-env-shell DEBUG=app nodemon server.js --> "cross-env-shell" only in windows
                                       // npm install cross-env --save-dev  --> only in windows
const path = require('path');
const morgan = require('morgan');

const app = express(); // init express app
const port = process.env.PORT || 8080;

// cosas que usa app
app.use(morgan('dev')); // log every request to the console

// rutas
app.use(express.static(path.join(__dirname + '/public/'))); // add /public/ to default general directory (a la ruta principal)
// hacer visible las carpetas de dentro de /public/ para el resto

app.use('/js', express.static(path.join(__dirname + '/node_modules/jquery/dist'))); //con "/js" puedes acceder a "/node.../dist"

// used files
// routes
require('./app/routes.js')(app);
// listen (start app with node server.js) ======================================
app.listen(port);
debug('The magic happens on port ' + chalk.green(port));


