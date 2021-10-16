module.exports = {
    development: {
        port: process.env.PORT || 3000,
        "DB_CONNECTION_STRING": "mongodb://localhost:27017/cubes"
    },
    production: {
        "DB_CONNECTION_STRING": "mongodb+srv://pesho:GtbCkhgBiYPQDdvf@test.ioq0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
};