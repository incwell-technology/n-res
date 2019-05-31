const mongoose = require('mongoose')
const schema = mongoose.Schema({
    food: { type: String, ref = 'foods' },
    quantity: { type: Number },
    status: { type: String }
})
module.exports = mongoose.model("orders", schema)