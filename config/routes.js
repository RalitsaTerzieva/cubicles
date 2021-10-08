// TODO: Require Controllers...
const express = require('express');
const router = express.Router();
const cubController = require('../controllers/cubController.js')
const homeController = require('../controllers/homeController.js')

module.exports = (app) => {
    router.all('/', (req, res) => {
        res.render('index')
    })

    app.use(router)
    app.use(homeController);
    app.use('/cube', cubController);
    app.use('*', (req, res) => {
        res.render('404');
    })
};