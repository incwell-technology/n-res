const router = require("express").Router();
const Order = require("../controller/orderController");
const Food = require("../controller/foodController");
const Categories = require("../controller/categoryController");

router.route('/categories').post(Categories.create);
router.route('/food').post(Food.create);
router.route('/createOrders').post(Order.create);
router.route('/showOrders').get(Order.show);
router.route('/ready').post(Order.ready);
router.route('/done').post(Order.done);
module.exports = router