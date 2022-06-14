const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const helpers = require('./helpers');

//DB connection
const db = require('./config/db');
require('./models/Tasks');
require('./models/Subtasks');
require('./models/Users');
db.sync()
    .then(() => console.log("Conectado al servidor"))
    .catch(error => console.log(error));

// Starting server configuration
const app = express();

//Public files loading
app.use(express.static('public'));

//Avaliability of pug as engine
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));

app.use(flash());

app.use(cookieParser());

//Routes path
app.set('views', path.join(__dirname, './views'));

app.use(session({
    secret: 'SuperSecret',
    resave: false,
    saveUninitialized: false
}))

//Using dump on application (helpers)
app.use((req, res, next) => {
    res.locals.dump = helpers.dump;
    res.locals.messages = req.flash();
    next();
})

app.use('/', routes());

app.listen(8080);
