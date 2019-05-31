const mongoose = require('mongoose') 
var schema = mongoose.Schema({
    food_name: { type: String, required: true },
    price: { type: Number },
    picture: { type: String, required: false },
})
module.exports = mongoose.model("Menu", schema)