const Cube = require('../models/Cube.js');
const cubeDb = require('../config/database.json');
const fs = require('fs');
const path = require('path');

//return all the data from the json file
//const getAll = () => cubeDb;
const getAll = () => Cube.cubes

const getOne = (id) => Cube.cubes.find(x => x.id == id)

const create = (name, description, imageUrl, difficultyLevel) => {
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.add(cube)
    //cubeDb.push(cube);
    let result = JSON.stringify(cubeDb, '', 2);
    const dbPath = path.resolve(path.join(__dirname, '..', 'config', 'database.json'))
    fs.writeFileSync(dbPath, result, {
        encoding: "utf8"
    })
}

const cubeService = {
    create, 
    getAll,
    getOne
}

module.exports = cubeService