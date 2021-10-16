const mongoose = require('mongoose');

//make the connection
function initDatabase(connectionString) {
    return mongoose.connect(connectionString);
} 

module.exports = initDatabase;