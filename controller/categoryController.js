const Category = require('../models/category')

exports.create = async (req, res) => {
    const category = new Category({
        cat_name : req.body.name,
        picture : req.body.picture,
        description : req.body.description
    })
    await category.save()
    res.send("Ok")
}