const router = require('express').Router()
const viewMenu = require('../controller/viewMenuController')

router.route('/viewMenu').get(viewMenu.get_menu)
router.route('/viewCategory/food').get(viewMenu.get_food_by_category)

module.exports = router;