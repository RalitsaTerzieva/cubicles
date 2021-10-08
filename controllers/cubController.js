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

const getCubeDetails = (req, res) => {
    //take the id from the url
    let cube = cubeService.getOne(req.param.cubeId);
    res.render('details', { ...cube })
}

router.get('/create', getCreateCubPage);
router.post('/create', createCub);
router.get('/:cubeId', getCubeDetails);


module.exports = router;