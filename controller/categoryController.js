const Category = require('../models/category')

exports.create = async (req, res) => {
    try {
        const category = new Category({
            cat_name: req.body.name,
            picture: req.body.picture,
            description: req.body.description
        })
        await category.save()
        res.status(201).json({
            "success": true,
            "payload": category
        })
    }
    catch (err) {
        console.log(err);
        res.status(422).json({
            "success": false,
            "payload": {},
            "error": {
                "code": 422,
                "message": "Unprocessable Entity"
            }
        })

    }
}