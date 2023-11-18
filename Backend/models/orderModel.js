const Order = require('../schemas/orderSchema')

// exports.createOrder = async (req, res) => {
//     const userId = req.userId
//     const {checkinDate, checkoutDate, cancellationProtection, cabin} = req.body

//     if(!checkinDate || !checkoutDate || !cabin || !userId){
//         return res.status(400).json({message: 'You need to fill all the fields'})

//     }

//     const order = await (await Order.create({checkinDate, checkoutDate, cancellationProtection, cabin, userId})).populate('cabin')

//     if(!order){
//         return res.status(500).json({message: 'somthing went wrong wrong'})
//     }
//     res.status(200).json(order)
// }
// const Order = require('../schemas/orderSchema');

exports.createOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const { checkinDate, checkoutDate, cancellationProtection, cabin } = req.body;

        if (!checkinDate || !checkoutDate || !cabin || !userId) {
            return res.status(400).json({ message: 'You need to fill all the fields' });
        }

        const orderData = { checkinDate, checkoutDate, cancellationProtection, cabin, userId };
        console.log('Order Data:', orderData);

        const order = await Order.create(orderData);
        console.log('Created Order:', order);

        const populatedOrder = await Order.populate(order, { path: 'cabin' });
        console.log('Populated Order:', populatedOrder);

        res.status(200).json(populatedOrder);
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


exports.getMyOrder = async (req, res) => {
    // const orders = await Order.find({user: req.userId}).populate('cabin')
    const orders = await Order.find({ userId: req.userId }).populate('cabin');


    if(!orders){
        return res.status(404).json({message: 'could not find the orders'})
    }
    res.status(200).json(orders)
}