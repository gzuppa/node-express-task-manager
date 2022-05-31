const express = require('express');
const routes = require('./routes');

// Creando la configuración inicial del servidor
const app = express();

// Middleware rutas
app.use('/', routes());

app.listen(8080);
