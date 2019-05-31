const mongoose = require('mongoose') 
var schema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    open_closed : { type: Boolean}
})
module.exports = mongoose.model("Resturant", schema)