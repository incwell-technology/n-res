const Order = require('../models/order')

exports.create = async (req, res) => {
    const order = new Order({
        food : req.body.food,
        quantity : req.body.quantity
    })
    await order.save()
    res.json('Ok')
}

exports.show = async (req, res) => {
    try {
        await Order.find({}, (err, doc) => {
            res.json({ doc })
        })
    }
    catch (err) {
        console.log(err)
    }
}