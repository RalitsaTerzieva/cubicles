const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.engine('hbs', hbs({extname: 'hbs'}));
    app.set('view engine', 'hbs')

    //TODO: Setup the body parser

    //TODO: Setup the static files
    app.use(express.static(path.join(__dirname, '..', 'static')));

};