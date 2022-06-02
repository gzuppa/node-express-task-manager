const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Creando la configuración inicial del servidor
const app = express();

//Cargando archivos públicos
app.use(express.static('public'));

// Habilitar pug como template engine
app.set('view engine', 'pug');

//Path rutas
app.set('views', path.join(__dirname, './views'));

//Habilitar body parseurl
app.use(bodyParser.urlencoded({extended: true}));

// Middleware rutas
app.use('/', routes());

app.listen(8080);
