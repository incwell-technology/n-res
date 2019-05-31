const mongoose = require('mongoose')
var schema = mongoose.Schema({
    cat_name: { type: String, required: true },
    picture: { type: String },
    description : {type:String, required: true}
})
module.exports = mongoose.model("Category", schema)