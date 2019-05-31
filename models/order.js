const mongoose = require('mongoose')
var schema = mongoose.Schema({
    food: [
        { type: Schema.Types.ObjectId, ref: 'Food' }
    ],
    quantity: { type: Number }
})
module.exports = mongoose.model("Order", schema)