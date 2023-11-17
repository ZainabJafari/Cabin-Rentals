const router = require('express').Router()
const orderModel = require('../models/orderModel')
const auth = require('../authentication/auth')

router.post('/', auth.verifyToken, orderModel.createOrder)
router.get('/myOrder', auth.verifyToken, orderModel.getMyOrder)

module.exports = router;