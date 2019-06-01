const Food = require('../models/food')

exports.create = async (req, res) => {
    try {
        const food = new Food({
            food_name: req.body.food_name,
            category: req.body.category,
            restaurant: req.body.restaurant,
            price: req.body.price,
            picture: req.body.picture,
            status: req.body.status,
            description: req.body.description
        })
        await food.save()
        res.status(201).json({
            "success": true,
            "payload": food
        })
    }
    catch (err) {
        console.log(err)
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