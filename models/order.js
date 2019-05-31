const mongoose = require('mongoose')
const schema = mongoose.Schema({
    food: [
        { type: Schema.Types.ObjectId, ref: 'Food' }
    ],
    quantity: { type: Number }
})
module.exports = mongoose.model("Order", schema)