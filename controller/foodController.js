const Food = require('../models/food')

exports.create = async (req, res) => {
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
}