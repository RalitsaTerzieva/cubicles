const express = require('express');
const router = express.Router();

//Put everything about cubic here

const getCreateCubPage = (req, res) => {
    res.render('create') 
}

const createCub = (req, res) => {
    res.render('create') 
}

router.get('/create', getCreateCubPage);
router.post('/create', createCub);


module.exports = router;