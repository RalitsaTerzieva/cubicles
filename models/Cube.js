const uniqid = require('uniqid');

class Cube {
    static cubes = [
        {"name": "Cubik",
        "description": "The best Cubik ever!",
        "imageUrl": "data:image/png;base64,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",
        "difficultyLevel": "1"
    }
]

    constructor(name, description, imageUrl, difficultyLevel) {
        this.id = uniqid();
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.difficultyLevel = difficultyLevel
    }

    static getAll() {
        return Cube.cubes.slice();
    }
}

module.exports = Cube