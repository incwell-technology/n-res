const router = require('express').Router()
const viewMenu = require('../controller/viewMenuController')
const food = require('../controller/foodController')
const category = require('../controller/categoryController')
const order = require('../controller/orderController')

router.route('/food').post(food.create)
router.route('/category').post(category.create)
router.route('/order').post(order.create)
module.exports = router;