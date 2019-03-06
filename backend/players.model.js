const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

let Players2 = new Schema({
    name: {type: String, required: true}
})

//first argument in name for Schema, second arguemnt is the actual schema
module.exports = mongoose.model('Players2', Players2);



