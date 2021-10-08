const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];

const express = require('express');
const app = express();
const cubController = require('./controllers/cubController.js')
const homeController = require('./controllers/homeController.js')

//instead of body parser we use this code
app.use(express.urlencoded({extended: true}));

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));