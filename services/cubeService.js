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

const search = (search, from, to) =>  {
    let result = Cube.cubes;
    if(search) {
        result = result.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from) {
        result = result.filter(x => x.difficultyLevel >= from);
    }

    if(to) {
        result = result.filter(x => x.difficultyLevel <= to);
    }

    return result;
};

const cubeService = {
    create, 
    getAll,
    getOne, 
    search
}

module.exports = cubeService