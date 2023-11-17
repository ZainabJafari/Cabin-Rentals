const Order = require('../schemas/orderSchema')

exports.createOrder = async (req, res) => {
    const userId = req.userId
    const {checkinDate, checkoutDate, cancellationProtection, cabin} = req.body

    if(!checkinDate || !checkoutDate || !cabin || !userId){
        return res.status(400).json({message: 'You need to fill all the fields'})

    }

    const order = await (await Order.create({checkinDate, checkoutDate, cancellationProtection, cabin, userId})).populate('cabin')

    if(!order){
        return res.status(500).json({message: 'somthing went wrong wrong'})
    }
    res.status(200).json(order)
}

exports.getMyOrder = async (req, res) => {
    const orders = await Order.find({user: req.userId}).populate('cabin')

    if(!orders){
        return res.status(404).json({message: 'could not find the orders'})
    }

    res.status(200).json(orders)
}