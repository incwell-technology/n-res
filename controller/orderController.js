const Order = require('../models/order')
const Food = require("../models/food");
const Category = require("../models/category");
const Restaurant = require("../models/restaurant");
exports.create = async (req, res) => {
    try {
        const orderArray = req.body.orders;
        for (let i = 0; i < orderArray.length; i++) {
            const order = new Order({
                food: orderArray[i].food,
                status: "cooking",
                quantity: orderArray[i].quantity
            })
            await order.save()
            res.status(201).json({
                "success": true,
                "payload": order
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(409).json({
            "success": false,
            "payload": {},
            "error": {
                "code": 409,
                "message": "Could not create order"
            }
        })
    }
}

exports.show = async (req, res) => {
    try {
        let doc = await Order.find({})
        let responseArray = []
        for (let i = 0; i < doc.length; i++) {
            if (doc[i].status !== "done") {
                let orderId = doc[i]._id
                let quantity = doc[i].quantity
                let status = doc[i].status
                let food = await Food.findById(doc[i].food)
                let category = await Category.findById(food.category)
                responseArray.push({ orderId, category, food, status, quantity })
            }
        }
        res.status(200).json({
            sucess: true,
            payload: responseArray
        })
    } catch (err) {
        console.log(err);
        res.status(403).json({
            "success": false,
            "payload": {},
            "error": {
                "code": 403,
                "message": "Could not get orders"
            }
        })

    }
};

exports.ready = async (req, res) => {
    try {
        const order = req.body.order;
        let ordered = await Order.findById(order);
        ordered.status = "cooked";
        await ordered.save();
        res.status(200).json({
            "success": true,
            "payload": ordered
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "payload": {},
            "error": {
                "code": 500,
                "message": "Internal Server Error"
            }
        })
    }
}

exports.done = async (req, res) => {
    try {
        const orderArray = req.body.orders;
        let tempOrder = [];
        for (let i = 0; i < orderArray.length; i++) {
            let order = await Order.findById(orderArray[i]);
            if (order.status === "cooking") {
                tempOrder = []
                return res.json("There are some items still cooking");
            }
            tempOrder.push(order);
        }
        for (let i = 0; i < tempOrder.length; i++) {
            tempOrder[i].status = "done";
            await tempOrder[i].save();
        }
        res.status(200).json({
            "success": true,
            "payload": {}
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "payload": {},
            "error": {
                "code": 500,
                "message": "Internal Server Error"
            }
        })
    }
}