const mongoose = require('mongoose')
const schema = mongoose.Schema({
    food: { type: String },
    quantity: { type: Number }
})
module.exports = mongoose.model("Order", schema)