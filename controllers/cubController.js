const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService.js');

//Put everything about cubic here

const getCreateCubPage = (req, res) => {
    let cubes = cubeService.getAll();
    console.log(cubes)
    
    res.render('create') 
}

const createCub = (req, res) => {
    let {name, description, imageUrl, difficultyLevel} = req.body;
    cubeService.create(name, description, imageUrl, difficultyLevel);
    res.redirect('/cube/create');
}

router.get('/create', getCreateCubPage);
router.post('/create', createCub);


module.exports = router;