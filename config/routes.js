// TODO: Require Controllers...
const express = require('express');
const router = express.Router();
const cubController = require('../controllers/cubController.js')
const homeController = require('../controllers/homeController.js')
const accessoryController = require('../controllers/accessoryController.js');
const authController = require('../controllers/authController.js');

module.exports = (app) => {
    router.all('/', (req, res) => {
        res.render('index')
    })

    app.use(router)
    app.use(homeController);
    app.use('/cube', cubController);
    router.use('/accessory', accessoryController);
    router.use(authController);
    app.use('*', (req, res) => {
        res.status(404).render('404');
    })
};