const router = require('express').Router()
const orderModel = require('../models/orderModel')

router.post('/', orderModel.createOrder)
router.get('/myOrder', orderModel.getMyOrder)

module.exports = router;