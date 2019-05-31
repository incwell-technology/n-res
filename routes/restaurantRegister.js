const router = require('express').Router()
const Register = require('../controller/register_res')

router.route('/register').post(Register.register)
router.route('/find').get(Register.find)

module.exports = router