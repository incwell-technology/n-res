const mongoose = require('mongoose')
var schema = mongoose.Schema({
    food_name: { type: String, required: true },
    category: [
        { type: Schema.Types.ObjectId, ref: 'Category' }
    ],
    price: { type: Number },
    picture: { type: String },
    description: { type: String, required: true }
})
module.exports = mongoose.model("Food", schema)