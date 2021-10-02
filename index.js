const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];


const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
//const controller = require('./controllers/catControllers.js');
//const requestLogger = require('./middlewares/requestLoggerMiddleware.js');

app.use(express.static(path.join(__dirname, 'static')));

//Controllers settup
//app.use('/cats', controller);

//Middlewares settup
//app.use(requestLogger);

//Handlebars settup
app.engine('hbs', hbs({extname: 'hbs'}));
app.set('view engine', 'hbs')


require('./config/express')(app);
require('./config/routes')(app);

app.all('/', (req, res) => {
    res.render('index')
})

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));