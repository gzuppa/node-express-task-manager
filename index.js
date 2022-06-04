const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

const helpers = require('./helpers');

//DB connection
const db = require('./config/db');
require('./models/Tasks');
db.sync()
    .then(() => console.log("Conectado al servidor"))
    .catch(error => console.log(error));

// Starting server configuration
const app = express();

//Public files loading
app.use(express.static('public'));

//Avaliability of pug as engine
app.set('view engine', 'pug');

//Using dump on application (helpers)
app.use((req, res, next) => {
    res.locals.dump = helpers.dump;
    next();
})

//Routes path
app.set('views', path.join(__dirname, './views'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(8080);
