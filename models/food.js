const mongoose = require('mongoose')
const schema = mongoose.Schema({
    food_name: { type: String, required: true },
    category:  { type: Object },
    restaurant: { type: Object},
    price: { type: Number },
    picture: { type: String },
    description: { type: String, required: true }
})
module.exports = mongoose.model("Food", schema)