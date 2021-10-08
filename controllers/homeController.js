const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService.js');

//Put everything about home here

const renderHome = (req, res) => {
    let cubes = cubeService.getAll()
    res.render('index', {cubes});
}

const about = (req, res) => {
    res.render('about');
}

router.get('/', renderHome)
router.get('/about', about)


module.exports = router;