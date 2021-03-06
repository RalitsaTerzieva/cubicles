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

const search = (req, res) => {
    let {search, from, to } = req.query
    let cubes = cubeService.search(search, from, to); 
    res.render('index', {
        title: "SEARCH",
        search,
        from,
        to,
        cubes
    });
}
router.get('/', renderHome);
router.get('/about', about);
router.get('/search', search);


module.exports = router;