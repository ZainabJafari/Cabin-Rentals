const mongoose = require('mongoose')
const {Schema} = mongoose;

const orderSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User' , required: true },
    cabin: {type: Schema.Types.ObjectId, ref: 'Cabin' , required: true },
    checkinDate: {type: String, required: true},
    checkoutDate: {type: String, required: true},
    cancellationProtection: {type: Boolean, default: false}
})


module.exports = mongoose.model('Order', orderSchema)
