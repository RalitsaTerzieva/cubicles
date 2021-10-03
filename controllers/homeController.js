const express = require('express');
const router = express.Router();

//Put everything about home here

const renderHome = (req, res) => {
    res.render('index') 
}

router.get('/', renderHome)


module.exports = router;