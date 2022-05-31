const express = require('express');
const routes = require('./routes');
const path = require('path');

// Creando la configuración inicial del servidor
const app = express();

//Cargando archivos públicos
app.use(express.static('public'));

// Habilitar pug como template engine
app.set('view engine', 'pug');

// Middleware rutas
app.use('/', routes());

//Path rutas
app.set('views', path.join(__dirname, './views'));

app.listen(8080);
